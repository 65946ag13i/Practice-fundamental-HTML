import "normalize.css";
import "./styles/main.scss";
import LayoutA from "./components/LayoutA";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Practice from "./components/Practice";
import { CounterProvider } from "./components/redux/example/CounterProvider";
function App() {
  return (
    <CounterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutA />}>
            <Route index element={<Practice />} />
            <Route path="AIExample" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  );
}

export default App;
