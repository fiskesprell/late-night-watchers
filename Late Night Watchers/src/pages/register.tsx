// NPM imports
import { Link } from "react-router-dom";
// Styling imports
import styles from "../styles/register.module.css";
// Components
import LogoImage from "../assets/logo.svg";

function Register() {
  return (
    <main className={styles.page}>

      <div className={styles.logo}>
        <img src={LogoImage} alt="Late Night Watchers text on top of logo featuring an image of a sunset." />
      </div>
      
      <div className={styles.contentWrapper}>
        <h1>Register</h1>
        
        <form>
          <input type="text" id="username" placeholder="Username" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password1" placeholder="Password" required />
          <input type="password" id="password2" placeholder="Type password again" required />
          <button type="submit">Register now!</button>
        </form>
        
        <h2>Already have a user?</h2>
        <Link to="/login" className={styles.loginBtn}>Back to login</Link>

      </div>

    </main>
  )
}

export default Register
