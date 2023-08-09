import { useState } from 'react';

function BookEdit({ onSubmit, onEdit, book }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
    onSubmit(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className='book-edit'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
