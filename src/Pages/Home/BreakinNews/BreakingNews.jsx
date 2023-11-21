import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex border-2 p-2 mt-8 bg-gray-200 rounded-lg">
      <button className="btn btn-secondary">Latest</button>
      <Marquee className="text-xl" pauseOnHover={true} speed={80}>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
