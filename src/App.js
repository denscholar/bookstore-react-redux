import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
