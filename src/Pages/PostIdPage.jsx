import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../Components/Hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import axios from "axios";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
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
    </div>
  );
};

export default PostIdPage;
