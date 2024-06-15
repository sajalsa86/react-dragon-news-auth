import PropTypes from "prop-types";
import { IoShareSocialOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { _id, author, title, image_url, details, rating, total_view } =
    props.singleNews;

  return (
    <div className="post bg-gray-100 mb-6">
      <div className="post-header p-4 flex justify-between items-center bg-slate-200 rounded">
        <div className="author flex items-center">
          <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
          <div className="ml-5">
            <h3 className="mb-2">{author.name}</h3>
            <p className="text-zinc-400">{author.published_date}</p>
          </div>
        </div>
        <div className="share-option flex text-xl cursor-pointer">
          <BiBookmark className="mr-4"></BiBookmark>
          <IoShareSocialOutline></IoShareSocialOutline>
        </div>
      </div>
      {/* hpost header close */}
      <div className="post-contain">
        <h3 className="p-4 text-xl font-bold text-slate-600">{title}</h3>
        <img className="p-4" src={image_url} alt="" />
        {/* Read more components */}
        {details.length > 200 ? (
          <p className="p-4">
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="capitalize text-amber-500">
              read more...
            </Link>
          </p>
        ) : (
          <p className="p-4">{details}</p>
        )}
        <div className="px-4 pb-4">
          <hr></hr>
        </div>

        <div className="post-info flex justify-between items-center">
          <div className="flex p-4">
            <span className=" text-amber-600 flex gap-2 text-xl">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </span>
            <p className="ml-3 text-slate-500"> {rating.number}</p>
          </div>
          <div className="view flex gap-3 items-center mr-5 text-xl text-slate-500">
            <MdRemoveRedEye></MdRemoveRedEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  singleNews: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    total_view: PropTypes.number.isRequired,
    _id: PropTypes.number.isRequired,
  }).isRequired,
};
/* PostCard.propTypes = {
  singleNews: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    }).isRequired,
    image_url: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      number: PropTypes.number.isRequired,
    }).isRequired,
    total_view: PropTypes.number.isRequired,
  }).isRequired,
}; */

export default PostCard;
