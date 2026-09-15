// NPM imports
import { Link } from "react-router-dom";
import mobile from "is-mobile"
// Styling imports
import "../styles/login.css";
// Images
import Logo from "../components/Logo";




let desktopSite: string = "You are on Desktop";
let mobileSite: string = "You are on Mobile";
// Remember this: <p>{mobile() ? (mobileSite) : (desktopSite)}</p> for changing views
// Change to different page.tsx instead of strings next time.


function Welcome() {
  return (
    <main>
      
      <Logo />
      
      <div className="mainForm">
        <h1>Welcome to Late Night Watchers</h1>
        <p>Made to help your group find the perfect next watch</p>
        <h2>Want to know how it works?</h2>
        <p>Check out our {<Link to="/tutorial">how to use</Link>} page</p>
        <h2>Ready to get started?</h2>
        <Link to="/login">Log in now!</Link>
      </div>


    </main>
  )
}

export default Welcome
