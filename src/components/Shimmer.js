const Shimmer = () => {
  return (
    <div className="shimmer">
    {/* <h1>Shimmer UI Loading........</h1> */}
    {
      Array(18)
      .fill("")
      .map((item, index) => <div className="shimmer-card" key={index}></div> )
    }
    </div>
  );
};

export default Shimmer;

