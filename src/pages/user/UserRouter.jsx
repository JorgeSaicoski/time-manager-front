import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Helper from "./Helper/Helper"

function UserRouter() {
  return (
    <Routes>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="helper" element={<Helper/>}/>
    </Routes>
  )
}

export default UserRouter