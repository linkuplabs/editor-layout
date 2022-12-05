
import React, {  useContext} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DesignEditor from "./screens/DesignEditor"
import { AppbarContainer } from './components/appbar/Appbar';

import './App.css';

function App() {
  return (
    <div>
      <AppbarContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DesignEditor/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
