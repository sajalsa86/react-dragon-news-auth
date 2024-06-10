import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex my-4">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee
        pauseOnHover={true}
        speed={100}
        gradient={true}
        gradientColor="gold"
        className="rounded-lg"
      >
        <Link className="mr-12" to={"http://www.facebook.com"} target="blank">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/" target="blank">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/" target="blank">
          I can be a React component, multiple React components.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
