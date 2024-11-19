import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
//THIS IS A PROJECT TO IMPLEMENT TOPICS LIKE USEEFFECT,HTTP REQUEST,CONDITIONAL RENDENRING

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(0);
  const [fetchid, setFetchId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetchid}`)

      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchid]);

  const showAllId = () => {
    setFlag(!flag);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    setFetchId(id);
  };

  return (
    <div>
      <h3 className="head">{props.name}</h3>

      <p className="head1">Write The Post Number Below To Fetch The Value</p>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button className="click" onClick={handleClick}>
        FETCH POST
      </button>
      <h6 className="head1">{post.title}</h6>

      <p className="head1">Click The Button Below to Fetch All Posts</p>
      <button className="click" onClick={showAllId}>
        FETCH ALL
      </button>
      {flag && (
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Posts;
