import { Routes, Route, Navigate } from "react-router-dom"

import GroupSelect from "../pages/group-select"
import Home from "../pages/home"
import Login from "../pages/login"
import MovieFinder from "../pages/movie-finder"
import Register from "../pages/register"
import Welcome from "../pages/welcome"

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