import React, {useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    // const [value, setValue] = useState('Text in input')
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Html', body: 'Description'},
        {id:3, title: 'React', body: 'Description'},]
    )
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {

       if(selectedSort) {
           return [...posts].sort((a, b) =>
               a[selectedSort].localeCompare(b[selectedSort]))
       }
       return posts
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
// получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }


  return (
      <div className='App'>
       <PostForm create={createPost}/>
          <hr style={{margin:'15px 0'}}/>
          <div>

              <MyInput
                value = {searchQuery}
                onChange = {e => setSearchQuery(e.target.value)}
                placeholder='Search'
              />

              <MySelect
                  value = {selectedSort}
                  onChange={sortPosts}
                  defaultValue='Sort'
                  options={[
                      {value: 'title', name: 'By title'},
                      {value: 'body', name: 'By description'}
                  ]}
              />
          </div>
          { posts.length !==0
          ? <PostList remove={removePost} posts={sortedPosts} title='Posts list'/>
          : <h1 style={{textAlign: 'center'}}>
                  Post are not found!
            </h1>
          }
      </div>
  );
}

export default App;
