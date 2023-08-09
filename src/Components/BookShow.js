import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onEdit, onDelete }) {
  const [editShow, setEditShow] = useState(false);

  let content = <h3>{book.title}</h3>;

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setEditShow(!editShow);
  };

  if (editShow) {
    content = <BookEdit book={book} onSubmit={setEditShow} onEdit={onEdit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick} />
        <button className='delete' onClick={handleDeleteClick} />
      </div>
    </div>
  );
}
export default BookShow;
