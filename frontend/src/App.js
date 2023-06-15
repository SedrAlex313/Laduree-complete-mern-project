import{ BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home';
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";


function App() {
  return (
    <>
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signIn"  element={<SignIn />} />
              <Route path="/signUp"  element={<SignUp />} />
              <Route path="/cart"  element={<Cart />} />



           </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
