/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DetailsCard = ({ news }) => {
 const { title, image_url, details } = news;

  return (
    <div>
      <div className="relative flex flex-col  text-gray-700 min-h-screen bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img src={image_url} className="object-cover w-[920px] h-full" />
        </div>
        <div className="p-6">
          <p className="block font-popins text-base antialiased font-bold leading-relaxed text-blue-gray-900">
            {title}
          </p>

          <p className="block font-sans text-sm antialiased font-medium leading-normal text-gray-700 opacity-75">
            {details}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={"/"}>
            <button
              className="block btn btn-secondary w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
            Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
