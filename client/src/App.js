import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black h-screen">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
