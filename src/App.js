import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Example from "./component/example";
import Home from "./component/home";
import Header from "./component/header";
import Category from "./component/category";
import Login from "./component/login";

function App() {
  const isLoggedin = true;
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
      <Route path="/example" element={ isLoggedin ? <Example/> : <Navigate to="/login" replace /> } />
      <Route path="/" element={ isLoggedin ? <Home/> : <Navigate to="/login" replace /> } />
     
        <Route path="/login" element={<Login/>} />

        <Route path="/category/:id" element={ isLoggedin ? <Category/> : <Navigate to="/login" replace /> } />
        <Route path="*" element={<h1>error 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
