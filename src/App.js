import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/App.css'
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    // const [value, setValue] = useState('Text in input')
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Html', body: 'Description'},
        {id:3, title: 'React', body: 'Description'},]
    )

    const [title, setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
    }

  return (
      <div className='App'>
          <form>
              {/*управляемый компонент*/}
              <MyInput
                  value={title}
                  onChange = {e=>setTitle(e.target.value)}
                  type="text"
                  placeholder='Post name'
              />
              <MyInput type="text" placeholder='Post description'/>
              <MyButton onClick={addNewPost}>Create post</MyButton>
          </form>
        <PostList posts={posts} title='Posts list'/>
      </div>
  );
}

export default App;
