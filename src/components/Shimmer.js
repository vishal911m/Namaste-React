const Shimmer = () => {
  return (
  <div className="body-shimmer">
  {/* <h1>Shimmer UI Loading........</h1> */}
  {
    Array(18)
    .fill("")
    .map((item, index) => <div className="shimmer" key={index}></div>)
  }
  </div>
  );
};

export default Shimmer;