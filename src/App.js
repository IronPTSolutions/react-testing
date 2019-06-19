import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './components/comments/CommentList';

function App() {
  return (
    <div className="container pt-5">
      <CommentList />
    </div>
  );
}

export default App;
