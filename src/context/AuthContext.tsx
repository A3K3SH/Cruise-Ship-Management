import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User as FirebaseUser, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { User, UserRole } from '../types';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userDetails: User | null;
  loading: boolean;
  isOffline: boolean;
  signup: (email: string, password: string, role: UserRole, displayName?: string, cabinNumber?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const USER_DETAILS_KEY = 'userDetails';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Save user details to local storage
  const saveUserDetailsToStorage = (details: User | null) => {
    if (details) {
      localStorage.setItem(USER_DETAILS_KEY, JSON.stringify(details));
    } else {
      localStorage.removeItem(USER_DETAILS_KEY);
    }
  };

  // Load user details from local storage
  const loadUserDetailsFromStorage = (): User | null => {
    const stored = localStorage.getItem(USER_DETAILS_KEY);
    return stored ? JSON.parse(stored) : null;
  };

  // Update user details with storage sync
  const updateUserDetails = (details: User | null) => {
    setUserDetails(details);
    saveUserDetailsToStorage(details);
  };

  // Signup function
  const signup = async (
    email: string, 
    password: string, 
    role: UserRole = UserRole.VOYAGER,
    displayName?: string,
    cabinNumber?: string
  ) => {
    if (isOffline) {
      throw new Error('Cannot sign up while offline');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Create user document in Firestore
      const userDoc = {
        id: user.uid,
        email: user.email,
        displayName: displayName || user.displayName,
        role,
        cabinNumber,
        createdAt: new Date()
      };

      await setDoc(doc(db, 'users', user.uid), userDoc);
      updateUserDetails(userDoc as User);
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    if (isOffline) {
      throw new Error('Cannot log in while offline');
    }

    try {
      console.log('Attempting login for:', email);
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful for:', email);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  // Signout function
  const signOut = async () => {
    if (isOffline) {
      throw new Error('Cannot sign out while offline');
    }

    try {
      await firebaseSignOut(auth);
      updateUserDetails(null);
    } catch (error) {
      console.error("Error during sign out:", error);
      throw error;
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      console.log('Auth state changed. Firebase user:', user);
      if (user) {
        // First try to load from storage
        const storedDetails = loadUserDetailsFromStorage();
        if (storedDetails && storedDetails.id === user.uid) {
          console.log('Using cached user details', storedDetails);
          setUserDetails(storedDetails);
        }

        // Only attempt to fetch from Firestore if we're online
        if (!isOffline) {
          try {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
              const details = userDoc.data() as User;
              console.log('Fetched user details from Firestore:', details);
              updateUserDetails(details);
            } else {
              console.warn('No user document found in Firestore for UID:', user.uid);
            }
          } catch (error) {
            console.error('Error fetching user details:', error);
            // If we failed to fetch but have cached details, keep using those
            if (!storedDetails || storedDetails.id !== user.uid) {
              console.log('No valid cached details available');
            }
          }
        }
      } else {
        updateUserDetails(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [isOffline]); // Re-run when online status changes

  const value = {
    currentUser,
    userDetails,
    loading,
    isOffline,
    signup,
    login,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};