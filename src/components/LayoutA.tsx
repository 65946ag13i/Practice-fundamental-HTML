// LayoutA.jsx
import { Helmet } from "react-helmet-async";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function LayoutA() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Helmet>
        <title>網頁基礎範例練習</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="練習基本的網頁功能，建立基礎元素使用"
        />
        <link rel="icon" href="/vite.svg" />

        {/*Open Graph*/}
        <meta property="og:title" content="首頁" />
        <meta
          property="og:description"
          content="練習基本的網頁功能，建立基礎元素使用"
        />
        {/* <meta property="og:image" content="https://example.com/og.jpg" /> */}
        <meta property="og:url" content="http://127.0.0.1:3000" />
      </Helmet>

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
