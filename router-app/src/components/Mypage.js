import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const Mypage = () => {
    const isLogin = false;
    const usenavigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            usenavigate('/login');
        }
    }, []); 

  return (
    <div>Mypage</div>
 
  );
}

export default Mypage