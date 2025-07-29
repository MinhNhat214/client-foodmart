import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { token, isInitialized } = useSelector((state) => state.auth); // lấy user, initital

  if (!isInitialized) return <div>Loading...</div>; // 👈 tránh redirect quá sớm
  //kiểm tra redux đã gán storage hay chưa

  if (!token) return <Navigate to="/login" replace />;
  //nếu không có, điều hướng về trang login

  return children;
}
