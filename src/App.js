import "./App.css";
import initializeAuthentication from "./Firebase/Firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {useState} from "react";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();
  // google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const {displayName, email, photoURL} = result.user;
        const logedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(logedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // github sign in
  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const {displayName, photoURL} = result.user;
        const logedInUser = {
          name: displayName,
          photo: photoURL,
        };
        setUser(logedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // facebook sign in
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const {displayName, photoURL} = result.user;
        const logedInUser = {
          name: displayName,
          photo: photoURL,
        };
        setUser(logedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="App bg-success">
      <div>
        <button onClick={handleGoogleSignIn}>Google SignIn</button>
        {user.name && (
          <div>
            <h2>Myself {user.name}</h2>
            <p>my email address: {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
        )}
      </div>
      <div>
        <button onClick={handleGithubSignIn}>Github SignIn</button>
        <br />

        <br />
        {user.name && (
          <div>
            <h2>Myself {user.name}</h2>

            <img src={user.photo} alt="" />
          </div>
        )}
      </div>
      {/* facebook sign in display user info */}
      <div>
        <button onClick={handleFacebookSignIn}>Facebook SignIn</button>
        <br />
        {user.name && (
          <div>
            <h2>Myself {user.name}</h2>

            <img src={user.photo} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
