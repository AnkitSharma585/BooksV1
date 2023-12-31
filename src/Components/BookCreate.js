import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const capTitle = title.charAt(0).toUpperCase() + title.slice(1);
    onCreate(capTitle);
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3>Add New Books</h3>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
