import "./App.css";
import initializeAuthentication from "./Firebase/Firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import {useState} from "react";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
initializeAuthentication();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();
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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
