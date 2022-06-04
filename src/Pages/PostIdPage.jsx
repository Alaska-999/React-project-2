import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../Components/Hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  // const [fetchComments, isComLoading, comError] = useFetching(async () => {
  //   const response = await PostService.getCommentsByPostId(params.id);
  //   setPost(response.data);
  // });

  useEffect(() => {
    fetchPostById(params.id);
    // fetchComments(params.id);
  });

  // useEffect(() => {
  // fetchPostById(params.id);
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }, []);
  return (
    <div>
      <h1>Post Page with id = {params.id}</h1>
      {/*{isLoading ? (*/}
      {/*  <Loader />*/}
      {/*) : (*/}
      <div>
        {post.id}. {post.title}
      </div>
      {/*)}*/}
      <h1>Comments</h1>
      {/*<div>*/}
      {/*  {comments.map((comm) => (*/}
      {/*    <div style={{ marginTop: 15 }}>*/}
      {/*      <h5>{comm.email}</h5>*/}
      {/*      <div>{comm.body}</div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default PostIdPage;
