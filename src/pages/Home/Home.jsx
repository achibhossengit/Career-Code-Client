import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  // const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  //   res.json()
  // );
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      {/* <HotJobs jobsPromise={jobsPromise}></HotJobs> */}
      <HotJobs></HotJobs>
    </div>
  );
};

export default Home;
