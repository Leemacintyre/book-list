import React from 'react';

const Form = (props) => {
  const {author, currentBookId, isbn, setAuthor, setIsbn, setTitle, title, handleSubmit, cancelEdit} = props
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        autoFocus
        required
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <label>Author</label>
      <input
        required
        type="text"
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <label>ISBN#</label>
      <input
        required
        type="text"
        value={isbn}
        onChange={event => setIsbn(event.target.value)}
      />
      <button
        tabIndex='0'
        type='submit'>
        {currentBookId !== null ? 'Update' : 'Add'}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default Form;
