import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = ({ setUpdate }) => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!title) {
      alert('Please Input Title before submit !');
      return false;
    }

    await axios.post('http://posts.com/posts/create', {
      title,
    });
    setUpdate((prev) => !prev);
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
