// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Post from './components/Post';
import PostWrite from './components/PostWrite';
import PostUpdate from './components/PostUpdate';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Board/>} />
        <Route exact path="/post/:boardId" element={<Post/>} />
        <Route exact path="/PostWrite" element={<PostWrite />} />
        <Route exact path="/PostUpdate/:boardId" element={<PostUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
