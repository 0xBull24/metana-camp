import { useState } from "react";
import "./App.css";
import Blogs from "./uesEffect";


const Home = () => {
  
  /* 
    Using useState hook to set 2 app variables since Home is the root component of the app
    This means the variables can be passed down to child nodes if wanted
   */
  const [name, setName] = useState('mario');
  const [age, setAge] = useState('22');

  // click event calling the set action states for the variables in state
  const handleClick = () => {
    setName('luigi');
    setAge(23);
  };

  // handleClick function on button refers to above and sets name and age
  // the blogs component returns another list of blogs and introduces the useEffect hook
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
      <Blogs/>
    </div>
  );
};

export default Home;
