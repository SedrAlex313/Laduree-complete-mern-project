import{ BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home';
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Waiter from "./pages/Administrators/waiter/Waiter";


function App() {
  return (
    <>
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signIn"  element={<SignIn />} />
              <Route path="/signUp"  element={<SignUp />} />
              <Route path="/cart"  element={<Cart />} />

              {/* Waiter Route  */}
              <Route path="/waiter"  element={<Waiter />} />
           

           </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
