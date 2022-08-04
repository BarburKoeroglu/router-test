import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {HashRouter, Route, Routes, useNavigate} from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Homepage from "./Homepage";


function App() {

  return (
<>
    <HashRouter>
        <Routes>
            <Route path={"/welcome/:name"} element={<WelcomePage/>}/>
            <Route path={"/"} element={<Homepage/>}/>
        </Routes>
    </HashRouter>
</>
  );
}

export default App;
