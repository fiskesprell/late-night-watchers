// NPM imports
import { Link } from "react-router-dom";
// Styling imports
import styles from "../styles/login.module.css";
// Components
import LogoImage from "../assets/logo.svg";


function Login() {
  return (
    <main className={styles.page}>

      <div className={styles.logo}>
        <img src={LogoImage} alt="Late Night Watchers text on top of logo featuring an image of a sunset." />
      </div>
      
      <div className={styles.contentWrapper}>
        <h1>Log in</h1>
        
        <form>
          <input type="text" id="jokeTitle" placeholder="Email or Username" required />
          <input type="password" id="password" placeholder="Password" required />
          {/* <button type="submit">Log in</button> */}
          <Link to="/home" className={styles.registerBtn}>Log in</Link>
        </form>
        
        <h2>Don't have a user?</h2>
        <Link to="/register" className={styles.registerBtn}> Register now! </Link>

      </div>

    </main>
  )
}

export default Login
