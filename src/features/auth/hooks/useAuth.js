import { useSelector } from 'react-redux';

export default function useAuth() {
  const { user, token } = useSelector((state) => state.auth); //lấy user và token trong slice auth
  //Nếu đã đăng nhập thì có, nếu không thì null
  const isLoggedIn = !!token; // ép kiểu token thành true // false
  

  return { user, token, isLoggedIn };
}