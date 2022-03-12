import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const title = e.target.title.value;
    const category = e.target.category.value;
    e.preventDefault();
    if (!title) {
      alert('Please Provide a book title');
      return;
    }
    dispatch(addBookAction(title, category));
  };
  return (
    <Container style={{ padding: '18px' }}>
      <h3 className="Title">
        ADD NEW BOOK
      </h3>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input type="text" placeholder="Book Title" name="title" />
        <select name="category" className="category">
          <option value="select" disabled>Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Non-fiction">Audi</option>
        </select>
        <div className="button">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
