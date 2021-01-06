import React, { useState, useEffect } from "react";
import './style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MyApplication from "./layout/MyApplication";

function App() {
  return (
    <Router>
      <MyApplication />
    </Router>
  );
}

export default App;