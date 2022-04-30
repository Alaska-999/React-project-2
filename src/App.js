import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";

function App() {
    const [value, setValue] = useState('Text in input')

  return (
      <div className={App}>
          <Counter/>
          <ClassCounter/>
      </div>
  );
}

export default App;
