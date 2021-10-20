import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useremail, setuserEmail] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // create user
  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const userEmail = (e) => {
    setuserEmail(e.target.value);
  };

  const userPassword = (e) => {
    setuserPassword(e.target.value);
  };

  const setUserInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const userRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email.length === 0) {
      setError("Please enter your email");
      return;
    }
    if (password.length === 0) {
      setError("Please enter a password");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 charecters");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserInfo();
        const user = result.user;
        console.log(user);
        setError("");
      })
      .finally(() => setIsLoading(false))
      .catch((error) => {
        setError(error.message);
      });
  };

  // login using email and pass
  const signInWithEmail = (e) => {
    e.preventDefault();
    if (useremail.length === 0) {
      setError("Please give your email");
      return;
    }
    if (userpassword.length === 0) {
      setError("Please give your password");
      return;
    }
    setIsLoading(true);
    signInWithEmailAndPassword(auth, useremail, userpassword)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(result.user);
        setError("");
      })
      .finally(() => setIsLoading(false));
  };

  // google sign-in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  //   observer of user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false))
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    isLoading,
    error,
    userRegistration,
    signInWithEmail,
    getName,
    getEmail,
    getPassword,
    userEmail,
    userPassword,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
