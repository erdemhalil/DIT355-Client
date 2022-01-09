import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import'./custom.scss';
import Home from './home/index';
import Profile from './profile/index';
import About from './about/index';
import LoginPage from './loginPage/index';
import SignUpPage from './signUpPage/index';
import BookPage from './bookPage/index';
import NotFound from './notFound/index';

  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/profile" element={<Profile/>} />
        <Route path="/bookPage/:id/" element={<BookPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/signUpPage" element={<SignUpPage/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
