import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import PostCard from "./PostCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* post Card */}
        <div className="md:col-span-2">
          {news.length === 0 ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            news.map((singleNews) => (
              <PostCard key={singleNews._id} singleNews={singleNews}></PostCard>
            ))
          )}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
