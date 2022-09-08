import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./page/components/Navbar";
import Dashboard from "./page/dashboard/Dashboard";
import Report from "./page/report/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="Dashboard" element={<Dashboard />} /> */}
          <Route path="Report" element={<Report />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);