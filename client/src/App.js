import React, { useState } from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  const [update, setUpdate] = useState(false);
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate setUpdate={setUpdate} />
      <hr />
      <h1>Posts</h1>
      <PostList update={update} setUpdate={setUpdate} />
    </div>
  );
};
export default App;
