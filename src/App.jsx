import React from "react";
import Login from "./Component/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Component/utils/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
       <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/admin/*"
            element={<ProtectedRoute usertypeRequired="Admin"/>}
          />
          <Route
            path="/agent/*"
            element={<ProtectedRoute usertypeRequired="Agent"/>}
          />
       
        </Routes>
      </Router>
    </>
  );
};

export default App;
