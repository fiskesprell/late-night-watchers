// NPM imports
import { Link } from "react-router-dom";
// Styling imports
import styles from "../styles/welcome.module.css";
// Images
import LogoImage from "../assets/logo.svg";






function Welcome() {
  return (
    <main className={styles.page}>
      
      <div className={styles.logo}>
        <img src={LogoImage} alt="Late Night Watchers text on top of logo featuring an image of a sunset." />
      </div>
      
      <div className={styles.contentWrapper}>
        <h1>Welcome to Late Night Watchers</h1>
        <p>Made to help <i>your</i> group find the perfect next watch</p>
        <h2>Want to know how it works?</h2>
        <p>Check out our {<Link to="/tutorial">how to use</Link>} page</p>
        <h2>Ready to get started?</h2>
        <Link to="/login" className={styles.loginBtn}>Log in now!</Link>
      </div>


    </main>
  )
}

export default Welcome
