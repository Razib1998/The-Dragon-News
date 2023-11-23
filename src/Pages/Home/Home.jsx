import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSIdeNav/LeftSideNav";
import Navbar from "../Shared/Navabr/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakinNews/BreakingNews";
import NewsCard from "./News/NewsCard";

const Home = () => {
  const newses = useLoaderData([]);
  console.log(newses);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          {newses.map((news) => (
            <NewsCard news={news} key={news._id}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
