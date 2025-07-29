import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../features/auth/hooks/useLogout";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const logout = useLogout();

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <header style={{ display: "flex", background: "white", border: "1px solid black", padding: "10px" }}>
      <Link to="/">MyStore</Link>

      <div style={{ display: "flex", width: "50%", justifyContent: "space-between" }}>
        <div>
          <select>
            <option value="">All Categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="meat">Meat</option>
          </select>
        </div>
        <div className="flex-1 mx-6">
          <input type="text" placeholder="Search products..." />
        </div>
      </div>

      <div style={{ display: "flex", width: "50%", justifyContent: "space-between", position: "relative" }}>
        <div>
          <div>Hỗ trợ: </div>
          <div>0981 49 84 08</div>
        </div>

        <Link to="/">
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </Link>

        <div style={{ position: "relative" }}>
          <FontAwesomeIcon icon={faCircleUser} size="lg" onClick={toggleMenu} style={{ cursor: "pointer" }} />
          {showMenu && (
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: 0,
                background: "white",
                border: "1px solid #ccc",
                padding: "10px",
                zIndex: 100,
              }}
            >
              <Link to="/profile">Tài khoản</Link>
              <br />
              <Link to="/orders">Đơn hàng</Link>
              <br />
              <button onClick={logout}>Đăng xuất</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
