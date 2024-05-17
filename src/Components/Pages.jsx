import React from 'react';
import Navbar from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';
import Professionals from "../Components/Professionals";
const Routes = () => {
  const nav = useNavigate();
  return (
   <>
    <Navbar navigate={nav} />
    <Professionals />
   </>
  )
}

export default Routes