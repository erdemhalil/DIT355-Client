import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import'./custom.scss';
import Home from './home/index';
import Profile from './profile/index';
import BookPage from './bookPage/index';
import About from './about/index';


  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/profile" element={<Profile/>} />
        <Route path="/bookPage" element={<BookPage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
