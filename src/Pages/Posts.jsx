import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../Components/Hooks/usePosts";
import { useFetching } from "../Components/Hooks/useFetching";
import PostService from "../API/PostService";
import { getPageCount } from "../Utils/pages";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/modal/MyModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import Loader from "../Components/UI/Loader/Loader";
import PostList from "../Components/PostList";
import Pagination from "../Components/UI/Pagination/Pagination";
import { useObserver } from "../Components/Hooks/useObserver";
import MySelect from "../Components/UI/select/MySelect";

function Posts() {
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
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(
    (limit, page) => {
      fetchPosts(limit, page);
    },
    [page, limit]
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Amount of elements"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "2" },
          { value: -1, name: "Show all" },
        ]}
      />
      {/*обработка ошибки запроса на получение данных*/}
      {postError && <h1>Error appeared {postError} </h1>}
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}

      <PostList
        filter={filter}
        setFilter={setFilter}
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts list"
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }} />

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
