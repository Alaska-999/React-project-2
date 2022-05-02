import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/App.css'
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {
    // const [value, setValue] = useState('Text in input')
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Html', body: 'Description'},
        {id:3, title: 'React', body: 'Description'},]
    )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
// получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



  return (
      <div className='App'>
       <PostForm create={createPost}/>
          { posts.length !==0
          ? <PostList remove={removePost} posts={posts} title='Posts list'/>
          : <h1 style={{textAlign: 'center'}}>
                  Posts are not found!
            </h1>
          }
      </div>
  );
}

export default App;
