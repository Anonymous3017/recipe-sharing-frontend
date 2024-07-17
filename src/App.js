import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainContent from './components/all/MainContent';
import './App.css';
import RecipeInfo from './components/recipeinfo/RecipeInfo';

function App() {
    return (
        <Router>
            <div className="App">
      
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />

                    <Route path="/recipe/:id" element={<RecipeInfo />} />
                    <Route path="/home" element={<MainContent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
