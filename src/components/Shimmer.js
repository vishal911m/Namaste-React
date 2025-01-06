const Shimmer = () => {
  return (
    <div className="shimmer flex flex-wrap" data-testid="shimmer">
    {/* <h1>Shimmer UI Loading........</h1> */}
    {
      Array(18)
      .fill("")
      .map((item, index) => <div className="shimmer-card w-48 h-64 m-2 bg-gray-300 animate-pulse rounded-lg" key={index}>
        
      </div> )
    }
    </div>
  );
};

export default Shimmer;

