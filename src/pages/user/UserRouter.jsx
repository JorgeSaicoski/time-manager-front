import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"

function UserRouter() {
  return (
    <Routes>
            <Route path="Dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default UserRouter