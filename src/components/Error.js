import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log("route error:", err);
  return (
    <>
    <h1>Oops! Something went wrong, Please try again.</h1>
    <h2>{err.status} : {err.statusText} </h2>
    </>
  );
};

export default Error;
