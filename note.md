my-react-app/
├── public/
│   └── index.html
├── src/
│
│   ├── app/                     # Khởi tạo ứng dụng
│   │   ├── store.js             # Redux store hoặc Zustand config
│   │   └── AppProviders.jsx     # Context / Theme / Router Providers
│
│   ├── assets/                  # Ảnh, icon, font, static file
│   │   ├── images/
│   │   └── icons/
│
│   ├── components/              # Component dùng lại toàn app (Button, Modal,...)
│   │   ├── UI/
│   │   └── layout/              # Navbar, Footer, Sidebar,...
│
│   ├── features/                # Từng module tính năng
│   │   ├── auth/
│   │   │   ├── components/      # LoginForm, RegisterForm
│   │   │   ├── hooks/           # useAuth
│   │   │   ├── services/        # call API auth
│   │   │   ├── authSlice.js     # Redux (nếu dùng)
│   │   │   └── index.jsx
│   │   ├── product/
│   │   │   ├── components/      # ProductCard, ProductList
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── productSlice.js
│   │   └── cart/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── services/
│
│   ├── hooks/                   # Custom hook dùng chung (useDebounce, useToggle...)
│
│   ├── pages/                   # Page chính (được gọi từ router)
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── NotFound.jsx
│
│   ├── routes/                  # Cấu hình router
│   │   └── AppRouter.jsx
│
│   ├── utils/                   # Hàm tiện ích chung
│   │   ├── formatDate.js
│   │   └── currency.js
│
│   ├── constants/               # Biến hằng số, enums, route path,...
│   │   ├── apiEndpoints.js
│   │   └── routePaths.js
│
│   ├── styles/                  # CSS/Tailwind/scss dùng chung
│   │   └── global.css
│
│   ├── App.jsx
│   └── main.jsx                 # entry point (Vite) hoặc index.js (CRA)
│
├── .env
├── .gitignore
├── vite.config.js / webpack.config.js
└── package.json
