import { Link } from "react-router-dom"

function Home() {
  return (
        <>
            <h1>Home!</h1>
            <Link to="/movie-finder">
                Go to movie finder
            </Link>
    
        </>
    )
}

export default Home
