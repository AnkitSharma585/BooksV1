import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const results = await axios.get('http://localhost:3005/books');
    setBooks(results.data);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const onCreate = async (title) => {
    const results = await axios.post('http://localhost:3005/books', { title });
    const renderedBooks = [...books, results.data];
    setBooks(renderedBooks);
  };

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3005/books/${id}`);
    const renderedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(renderedBooks);
  };

  const onEdit = async (id, newTitle) => {
    const results = await axios.put(`http://localhost:3005/books/${id}`, {
      title: newTitle,
    });

    const renderedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...results.data };
      } else return book;
    });
    setBooks(renderedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookCreate onCreate={onCreate} />
      <BookList books={books} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}
export default App;
