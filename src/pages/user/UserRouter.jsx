import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Helper from "./Helper/Helper"
import Navbar from "@components/Navbar/Navbar"

function UserRouter() {
  const routeItems = {
    Dashboard: '/user/dashboard',
    Helper: '/user/helper'
  };

  return (
    <div>
      <Navbar items={routeItems} />
      <Routes>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="helper" element={<Helper/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter