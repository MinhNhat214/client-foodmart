// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isInitialized: false, // 👈
};

const authSlice = createSlice({
  name: 'auth', //tên của slice được dùng trong state.auth
  initialState, //giá trị mặc định ban đầu, tự khai báo ở trên
  reducers: {
    setAuth(state, action) { //reducer: tương tự 1 phương thức
      state.user = action.payload.user; //cập nhật lại redux store
      state.token = action.payload.token;
      state.isInitialized = true; // 👈
    },

    logout(state) { //reducer
      //cập nhật lại redux store
      state.user = null;
      state.token = null;
      state.isInitialized = true; // 👈
      //xóa item trong localstorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

//lấy ra các action
export const { setAuth, logout } = authSlice.actions; //giúp dùng trong dispatch
export default authSlice.reducer; // Đây là phần reducer chính sẽ được đưa vào configureStore().
//redux dùng nó để
//  quản lý state
//  gọi đúng các reducer khi bạn dispatch setAuth() hoặc logout()
