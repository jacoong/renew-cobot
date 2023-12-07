import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageKit from './PageKit';
import  TodosContextProvider from './store/todo_context'


function App() {
  return (
    <>
   <Router>
    <TodosContextProvider>
      <Routes>
        <Route path='/'  element={<Home />}/>
      </Routes>
      </TodosContextProvider>
   </Router>
    </>
  );
}

export default App;
