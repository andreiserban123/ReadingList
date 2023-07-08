import { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleOnSumbit = (e) => {
    e.preventDefault();
    setTitle('');
    createBook(title);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleOnSumbit}>
        <label> Enter the title: </label>
        <input className="input" value={title} onChange={handleOnChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};
export default BookCreate;
