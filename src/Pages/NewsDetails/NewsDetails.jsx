import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    const [news, setNews] = useState({})
    const {id} = useParams();
    const newses = useLoaderData();
    

    useEffect(()=>{
        const news = newses.find(news => news._id == id);
        if(news){
            setNews(news)
        }
    },[newses, id])
    console.log(news)
    
    return (
      <div>
        <Header></Header>
        <div className="grid md: grid-cols-4 gap-6 mt-6">
          <div className="md:col-span-3">
            <DetailsCard news={news}></DetailsCard>
          </div>
          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};

export default NewsDetails;