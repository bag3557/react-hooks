import React, { useState, useEffect } from "react";
import axios from "axios";

const SinglePostDataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(undefined);
  const [idFromButtonClick, setIdFromButtonClick] = useState(undefined);

  useEffect(() => {
    console.log("api calling");
    id > 0 &&
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err));
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={event => setId(event.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <h4>{post.title}</h4>
    </div>
  );
};

export default SinglePostDataFetching;
