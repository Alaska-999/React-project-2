import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import { usePosts } from "./Components/Hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";

function App() {
  // const [value, setValue] = useState('Text in input')
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: " high-level, often just-in-time compiled language that conforms to the ECMAScript standard.",
    },
    { id: 2, title: "Html", body: "HyperText Markup Language" },
    {
      id: 3,
      title: "React",
      body: "a style sheet language used for describing the presentation of a document written in a markup language.",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false);
    }, 1000);
  }

  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          filter={filter}
          setFilter={setFilter}
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts list"
        />
      )}
    </div>
  );
}

export default App;
