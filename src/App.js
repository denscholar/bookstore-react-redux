import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Form from './components/Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Form />
    </div>
  );
}

export default App;
