import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../authSlice";
import { loginApi } from "../services/authApi";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //hook của redux
  const dispatch = useDispatch(); //để gửi action lên store
  // mục đích để cập nhật state trong redux
  // Dùng để gọi các reducer bạn đã định nghĩa trong authSlice

  const navigate = useNavigate(); //lấy hàm navigate từ react router
  //dùng để điều hướng trang

  const token = useSelector((state) => state.auth.token); //Dùng để truy cập vào Redux state
  // lấy token từ authSlice trong initialState
  //  state là toàn bộ Redux store
  //    auth là slice bạn đã định nghĩa trong authSlice.js
  //      token là một giá trị nằm trong initialState, thường là:

  // kiểm tra token vừa lấy để biết đăng nhập hay chưa
  if (token) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await loginApi(email, password);

      // Lưu vào Redux
      dispatch(setAuth({ user, token }));

      // Lưu vào localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      // Điều hướng sau login
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Đăng nhập</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
        required
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default LoginPage;
