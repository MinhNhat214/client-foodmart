import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../features/auth/components/loginPage";
import RequireAuth from './RequireAuth';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route công khai, ai cũng truy cập được */}
        <Route path="/login" element={<LoginPage />} />
        {/* Route cần xác thực */}
        <Route
          path="/"
          element={
            // bọc lại bằng kiểm tra đăng nhập 
            <RequireAuth>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
