import { Routes, Route, Navigate } from "react-router-dom"

import GroupSelect from "../pages/group-select"
import Home from "../pages/home"
import Login from "../pages/login"
import MovieFinder from "../pages/movie-finder"
import Register from "../pages/register"
import Welcome from "../pages/welcome"

/* Todo: switch between Mobile and Desktop versions of site
    Remember to:
        import mobile from "is-mobile"
        example use:
        let desktopSite: string = "You are on Desktop";
        let mobileSite: string = "You are on Mobile";
        <p>{mobile() ? (mobileSite) : (desktopSite)}</p> for changing views
        But change to different page.tsx instead of strings.
*/

function LateNightWatcherRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movie-finder" element={<MovieFinder />} />
            <Route path="/group-select" element={<GroupSelect />} />
        </Routes>
    )
}

export default LateNightWatcherRoutes