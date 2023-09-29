// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Post from './components/Post';
import PostWrite from './components/PostWrite';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact  path="/" element={<Board/>} />
    //     <Route exact  path="/post/:boardId" element={<Post/>} />
    //   </Routes>
    // </Router>
    <PostWrite />
  );
}

export default App;
