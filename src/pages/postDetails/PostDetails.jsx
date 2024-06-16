import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import moment from "moment";
const PostDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();
  // const idInt = parseInt(id);

  const aNews = news.find((aNew) => aNew._id === id);
  console.log("found news item:", aNews);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="py-4 capitalize font-semibold text-2xl">
            dragon news
          </h2>
          <div className="border p-4 rounded-lg">
            <img className="w-full" src={aNews.image_url} alt="" />
            <h2 className="py-4 text-4xl leading-snug font-medium">
              {aNews.title}
            </h2>
            <p>{aNews.details}</p>
            <button className="btn btn-secondary capitalize my-5">
              <span>
                <BiSolidLeftArrow></BiSolidLeftArrow>
              </span>
              all news in this category
            </button>
          </div>
          {/* post details end */}
          <div className="editor mt-5 mb-10">
            <h2 className="mb-5 font-semibold text-xl text-slate-500">
              Editors Insight
            </h2>
            <div className="boxContainer grid grid-cols-3 gap-4">
              <div className="card">
                <div className="bg-slate-200 h-32 rounded"></div>
                <h3 className="py-4 pr-4">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="flex gap-4 items-center text-slate-500">
                  <FaCalendar></FaCalendar>
                  {moment().format("ll")}
                </p>
              </div>
              <div className="card">
                <div className="bg-slate-200 h-32 rounded"></div>
                <h3 className="py-4 pr-4">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>

                <p className="flex gap-4 items-center text-slate-500">
                  <FaCalendar></FaCalendar>
                  {moment().format("ll")}
                </p>
              </div>
              <div className="card">
                <div className="bg-slate-200 h-32 rounded"></div>
                <h3 className="py-4 pr-4">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="flex gap-4 items-center text-slate-500">
                  <FaCalendar></FaCalendar>
                  {moment().format("ll")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
