import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news)
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
     
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div >
            <LeftSideNav />
        </div>

           {/*  News Container */}

        <div className="md:col-span-2 ">
              {
                  news.map(singleNews => <NewsCard
                    key={singleNews._id}
                    singleNews={singleNews}
                  ></NewsCard>)
              }
        </div>
        <div >
            <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
