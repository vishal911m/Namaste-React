import { Outlet } from "react-router";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// const About1 = () => {
//   return (
//     <div>
//   <h1>Your one stop destination for all your delivery needs</h1>
//   <ProfileFunctionalComponent name={"Vishal"}/>
//   <Profile name={"Vishal"} xyz={"abc"}/>
//   </div>
// );
// };

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent - constructor");
  }
  componentDidMount() {
    //Best place to make API calls
    // console.log("Parent - componentDidMount");
  }
    render() {
    // console.log("Parent - render")
    return (
      <div>
    <h1>Your one stop destination for all your delivery needs</h1>
    <UserContext.Consumer>
      {({user})=> {
        return <h4 className="folt-bold text-xl p-10">{user.name} - {user.email}</h4>
      }}
    </UserContext.Consumer>
    {/* <ProfileFunctionalComponent name={"Vishal"}/> */}
    <Profile name={"First Child"} xyz={"abc"}/>
    {/* <Profile name={"Second Child"} xyz={"abc"}/> */}
    </div>
  );
  }
}

export default About;

/* React class component lifecycle:
* Parent constructor
* Parent - render
  When the component is rendered, id sees the JSX and looks there is a component there (<Profile />), so it will go to this
  component and it will trigger its lifecycle, Now it will go to the children.
* Child - Constructor
* Child - render
* Child - componentDidMount
* Parent - componentDidMount
 */

/* Lifecycle with multiple child components:
* Parent constructor
* Parent render
* First Child constructor
* First Child render
* Second Child constructor
* Second Child render
* First Child componentDidMount
* Second Child componentDidMount
* Parent componentDidMount
 */

/* Research1: super(props):
In React class components, super(props) is used in the constructor method to call the parent class's constructor and pass
the props object to it. Here's a breakdown of what it does and why it's necessary:

1. Why super(props) is Required
Inheritance: In JavaScript, when you use extends to create a subclass, you must call super() in the constructor of 
the subclass before accessing this. This is because this is uninitialized until super() is called.
Passing Props: When you pass props to super(), it ensures that the props are correctly initialized in the base class 
(React.Component) and are accessible via this.props.

 */

/* Research2: Why componentDidMount can be made asynd and useEffect cannot be made async?:
The difference in how componentDidMount and useEffect handle asynchronous operations stems from the nature of how they are implemented and used in React. Let’s break it down:

1. componentDidMount Can Be Made async
componentDidMount is a lifecycle method in class components, and since it is just a regular method, you can mark it as async.
When you make componentDidMount async, it allows you to use await directly within it to handle asynchronous operations like fetching data.
Example:

jsx
Copy code
class MyComponent extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}
Key Points:

React doesn’t directly care if componentDidMount is async because it doesn’t expect a return value from this method.
The async keyword simply enables the use of await within the method, which is handled by JavaScript.
2. useEffect Cannot Be Made async
useEffect is a hook that is designed to run side effects after rendering. React expects the function passed to useEffect to either return undefined or a cleanup function (to handle resource cleanup).
If you declare the function passed to useEffect as async, it will return a promise, which React would interpret as a cleanup function. This breaks React's expectations and leads to unintended behavior.
Example (Incorrect):

jsx
Copy code
useEffect(async () => {
  const data = await fetchData(); // ❌ React won't handle this properly
  setData(data);
}, []);
Why This is Problematic:

React doesn't know how to handle an asynchronous return value from useEffect.
It expects a synchronous cleanup function or nothing at all.
3. How to Handle Async Code in useEffect
You can handle asynchronous code inside useEffect by defining an async function within the effect and then calling it.

Example:

jsx
Copy code
useEffect(() => {
  const fetchData = async () => {
    const data = await fetchDataFromAPI();
    setData(data);
  };

  fetchData();
}, []);
4. Key Differences
Feature	componentDidMount	useEffect
Can be made async?	Yes	No
Handles async code?	Directly with async/await.	Use an inner async function.
Returns cleanup function?	No	Optional cleanup function.
React Expectations	Doesn't expect any return value.	Expects undefined or cleanup.
5. Why Does useEffect Have This Restriction?
React’s functional programming paradigm expects effects to be predictable and cleanup-ready. Allowing an async function 
directly in useEffect would complicate React's internal mechanism for handling and cleaning up effects. By restricting useEffect
to synchronous functions, React ensures:

Cleanup happens deterministically.
It can better optimize effect handling during concurrent rendering.
If you'd like, I can help rewrite any componentDidMount logic to work inside a useEffect or explore other asynchronous 
patterns in React!
 */

