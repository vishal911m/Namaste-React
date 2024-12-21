import React from "react";

class Profile extends React.Component{
  constructor(props){
    super(props);
    //create state
    this.state = {
      userInfo: {
        name:"Dummy name",
        location:"Dummy location",
      },
    };
    console.log("Child - constructor " + this.props.name);
  }

  async componentDidMount(){
    // This is the place where wee have to make API calls
    const data = await fetch("https://api.github.com/users/vishal911m", {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    console.log("API request: ",json)
    console.log("Child - componentDidMount " + this.props.name);
    this.timer = setInterval(() => {
      console.log("React OP")
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render(){
    // This is the place to make the initial render of the page
    const {count} = this.state;
    console.log("Child - render " + this.props.name);
    return (
      <div>
    <h1>Class component</h1>
    <img src={this.state.userInfo.avatar_url}/>
    <h2>Name: {this.state.userInfo.name}</h2>
    <h2>Country: {this.state.userInfo.location}</h2>
    <h2>Bio: {this.state.userInfo.bio}</h2>
    </div>
    );
  }
};

export default Profile;