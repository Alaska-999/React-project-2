import React, {useMemo, useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    // const [value, setValue] = useState('Text in input')
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: ' high-level, often just-in-time compiled language that conforms to the ECMAScript standard.'},
        {id:2, title: 'Html', body: 'HyperText Markup Language'},
        {id:3, title: 'React', body: 'a style sheet language used for describing the presentation of a document written in a markup language.'},]
    )
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const sortedPosts = useMemo(() => {
        if(selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])
// колбек будет вызван в том случае если какая то из зависимостей поменяет свое значение

   const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
   }, [searchQuery, sortedPosts])


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
          { sortedAndSearchedPosts.length !==0
          ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list'/>
          : <h1 style={{textAlign: 'center'}}>
                  Post are not found!
            </h1>
          }
      </div>
  );
}

export default App;
