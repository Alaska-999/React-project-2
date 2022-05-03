import React, { useMemo, useState } from "react";
import "./Styles/App.css";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";

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

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  // колбек будет вызван в том случае если какая то из зависимостей поменяет свое значение

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          filter={filter}
          setFilter={setFilter}
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts list"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post are not found!</h1>
      )}
    </div>
  );
}

export default App;
