export const Title = () => {
    return (
    <a href="/">
      <img 
      className="logo" 
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      alt="logo"
      />
    </a>
    );
  }

  const Header = () => {
    return(
      <div className="header"> 
        <Title />
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

  export default Header;