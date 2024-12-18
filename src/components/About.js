import { Outlet } from "react-router";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

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
    {/* <ProfileFunctionalComponent name={"Vishal"}/> */}
    <Profile name={"First Child"} xyz={"abc"}/>
    {/* <Profile name={"Second Child"} xyz={"abc"}/> */}
    </div>
  );
  }
}

export default About;

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
