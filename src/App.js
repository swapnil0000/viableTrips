import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import JoinUs from "./pages/joinUs/JoinUs";
import Blogs from "./pages/blogs/Blogs";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/blogs" element={<Blogs/>}/>
       <Route path="/join" element={<JoinUs/>}/>
       <Route path="/login" element={<Login/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
