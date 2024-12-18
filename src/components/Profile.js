import { useEffect, useState } from "react";

const Profile = (props) => {
  const[count, setCount] = useState(0);
  const[count2, setCount2] = useState(0);
  useEffect(() => {
    //API call 
    console.log("useEffect");
    const timer = setInterval(() => {
      console.log("React OP")
    }, 1000);

    return() => {
      console.log("Use effect return");
      clearInterval(timer);
    };

  }, []);
  console.log("render");
  return (
    <div>
    <h1>Functional Component </h1>
    <h2>Name: {props.name}</h2>
    <h2>Count: {count}</h2>
    <button onClick={() => {
      setCount(1);
      setCount2(2);
    }}>Click Me!</button>
    </div>
  );
};

export default Profile;