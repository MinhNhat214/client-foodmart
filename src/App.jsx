// import { useState } from 'react'
// import React from 'react';
// import AppRoutes from "./routes"
// function App() {
//   return (

//     <AppRoutes/>
//   )
// }

// export default App

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./features/auth/authSlice";
import AppRoutes from "./routes/AppRoutes";
function App() {
  const dispatch = useDispatch(); //giửi action lên Redux store
  const token = useSelector((state) => state.auth.token); //lấy token từ store

  useEffect(() => {
    //truy cập lần đầu
    const storedUser = localStorage.getItem("user"); //lấy item từ localSrorage
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      //nếu có
      dispatch(
        setAuth({ // gọi setAuth để cập nhật lại redux store 
          user: JSON.parse(storedUser),
          token: storedToken,
        })
      );
    }
    // console.log("storedUser - app.jsx: ", storedUser);
    // console.log("storedToken - app.jsx: ", storedToken); // 👈 thêm dòng này để kiểm tra
  }, []);

  useEffect(() => { //chạy khi token thay đổi
    // nếu không có token
    if (!token) { // nếu token ở store = null
      //lấy token ở storage gán vào redux store lại
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      
      if (storedUser && storedToken) {
        dispatch(
          setAuth({
            user: JSON.parse(storedUser),
            token: storedToken,
          })
        );
      } else {
        // nếu token trong storage cũng = null
        // thì set store bằng null để đăng xuất
        // để đảm bảo isInitialized được set trong mọi trường hợp
        dispatch(setAuth({ user: null, token: null }));
      }
    }
  }, [dispatch, token]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
