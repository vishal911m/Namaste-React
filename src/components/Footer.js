import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return(
      <div className="p-10 m-1 flex justify-center items-center border border-gray-300 rounded-lg"> 
          <h1 className="text-center">This site is developed by {user.title} - {user.email}</h1>
      </div>
  );
};

export default Footer;