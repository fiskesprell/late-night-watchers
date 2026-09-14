import { Routes, Route, Navigate } from "react-router-dom"

import GroupSelect from "../pages/group-select"
import Homepage from "../pages/homepage"
import Login from "../pages/login"
import MovieFinder from "../pages/movie-finder"
import Register from "../pages/register"

function LateNightWatcherRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/movie-finder" element={<MovieFinder />} />
            <Route path="/group-select" element={<GroupSelect />} />
        </Routes>
    )
}

export default LateNightWatcherRoutes