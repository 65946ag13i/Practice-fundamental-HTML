// LayoutA.jsx
import { Link, Outlet, useLocation } from "react-router-dom";

export default function LayoutA() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">My App</div>
          {/* 純切換組件 */}

          <nav className="nav">
            {pathname === "/" && <Link to="/practice">Practice</Link>}
            {pathname !== "/" && <Link to="/">homepage</Link>}
          </nav>
        </div>
      </header>

      {/* 子路由會在這裡渲染 */}
      <div className="main-center">
        <Outlet />
      </div>

      <div className="text-center bg-color-gray p-3">頁尾</div>
    </div>
  );
}
