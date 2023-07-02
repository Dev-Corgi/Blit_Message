import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./Controller/ControllerSetConfig";
import "./App.css";
import MakeGroupScene from "Scene/MakeGroupScene/MakeGroupScene"
import GroupInfoScene from "Scene/GroupInfoScene/GroupInfoScene";
import IntroScene from "Scene/IntroScene/IntroScene";
import RegistKakaoLinkScene from "Scene/RegistKakaoLinkScene/RegistKakaoLinkScene";
import ListScene from "Scene/ListScene/ListScene";

function App() {
  const location = useLocation();
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<IntroScene/>} />
          <Route path="/GroupInfo1" element={<GroupInfoScene/>} />
          <Route path="/GroupInfo2" element={<GroupInfoScene/>} />
          <Route path="/GroupInfo3" element={<GroupInfoScene/>} />
          <Route path="/GroupInfo4" element={<GroupInfoScene/>} />
          <Route path="/GroupInfo5" element={<GroupInfoScene/>} />
          <Route path="/List" element={<ListScene/>} />
          <Route path="/MakeGroup" element={<MakeGroupScene/>} />
          <Route path="/RegistKakaoLink" element={<RegistKakaoLinkScene/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
