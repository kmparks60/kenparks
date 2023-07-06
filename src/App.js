import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;