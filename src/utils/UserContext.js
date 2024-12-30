import { createContext } from "react";

const UserContext = createContext({
  user: {
  name: "Welcome User!",
  title: "User",
  email: "user@email.com",
  },
});

UserContext.displayName = "UserContext"; //display name for debugging

export default UserContext;