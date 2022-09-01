import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from './MenuList';
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import NoPage from '../pages/NoPage';


export default function NavBar() {
  const username = localStorage.getItem("email");

  const notLoggedIn = (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MenuList />}>
        <Route index element={<LogIn />} />
        <Route path="SignUp" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );

  const loggedIn = (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MenuList />}>
        <Route index element={<Home />} />
        <Route path="logIn" element={<Home />} />
        </Route>
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
  return (
    <div>
      {username? loggedIn : notLoggedIn}
    </div>
  )
}
