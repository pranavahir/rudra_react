// pages/index.js
"use client"
import Link from 'next/link';
import { Box, Button, Grid } from '@mui/material';
import Login from '@/components/Auth/Login';
import ForgotPassword from '@/components/Auth/ForgetPassword';
import SignUp from '@/components/Auth/SignUp';
import Dashboard from '@/components/MainComponent/Dashboard';
import AuditTrail from '@/components/MainComponent/AuditTrail';
import DashboardAudit from '@/components/MainComponent/Dashboard';
import Sidebar from '@/components/MainComponent/SideBar';
import { useEffect, useState } from 'react';
// export default function Home() {
//   return (
//     // <Login/>
//     // <ForgotPassword/>
//     <SignUp/>
//   );
// }
export default function Home() {
  const [auth,setAuth] = useState(false)
  const [authstate,setAuthState] = useState("login")
  useEffect(() => {
    const gettoken = localStorage.getItem("token")
    if(!gettoken){
      setAuth(false)
    }
    else{
      setAuth(true)
    }
  },[])
  return (
    <>
    {!auth?
    <>
    {authstate === "login"?
    <Login setAuthState={setAuthState}/>:
    authstate === "register"?
    <SignUp setAuthState={setAuthState}/>:
    authstate === "forgetpassword"?
    <ForgotPassword setAuthState={setAuthState}/>:""}
    </>:
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      {/* <Dashboard/> */}
      <AuditTrail/>
    </Box>
    }
    {/* <ForgotPassword/>
    <SignUp/>
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Dashboard/>
      <AuditTrail/>
    </Box> */}
    </>
  );
}
