import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import QZone1 from "../../../../public/assets/qZone1.png"
import QZone2 from "../../../../public/assets/qZone2.png"
import QZone3 from "../../../../public/assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold">Login With</h2>
        <button className="  btn btn-outline w-full mt-4">
          <FaGoogle className="text-blue-500 text-xl"></FaGoogle>
          <span className="text-blue-500 text-l">Login With Google</span>
        </button>
        <button className="  btn btn-outline w-full mt-4">
          <FaGithubSquare className="text-2xl "></FaGithubSquare>
          <span className="text-l">Login Github</span>
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Find Us on</h2>
        <a
          className="flex gap-3 justify-center items-center text-lg border rounded-t-lg p-4"
          href=""
        >
          <FaFacebook className="text-xl"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a
          className="flex gap-3 justify-center items-center text-lg border-x p-4"
          href=""
        >
          <FaTwitter className="text-xl"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="flex gap-3 justify-center items-center text-lg border rounded-b-lg p-4"
          href=""
        >
          <FaInstagram className="text-xl"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/* Q Zone */}

      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Q-Zone</h2>
        <img className="mb-6" src={QZone1} alt="" />
        <img className="mb-6" src={QZone2} alt="" />
        <img src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
