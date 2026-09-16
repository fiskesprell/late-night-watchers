// NPM imports
import { Link } from "react-router-dom";
import mobile from "is-mobile"
// Styling imports
import "../styles/login.css";
// Components
import Logo from "../components/Logo";



let desktopSite: string = "You are on Desktop";
let mobileSite: string = "You are on Mobile";
// Remember this: <p>{mobile() ? (mobileSite) : (desktopSite)}</p> for changing views
// Change to different page.tsx instead of strings next time.


function Login() {
  return (
    <main>

      <Logo />
      
      <div className="mainForm">
        <h1>Log in</h1>
        
        <form>
          <input type="text" id="jokeTitle" placeholder="Email or Username" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Log in</button>
        </form>
        
        <h2>Don't have a user?</h2>
        <Link to="/register" className="register-btn"> Register now! </Link>

      </div>

    </main>
  )
}

export default Login
