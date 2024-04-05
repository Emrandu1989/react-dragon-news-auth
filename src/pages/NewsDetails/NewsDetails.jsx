import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
              <Header />
              <NavBar />
             <div className="grid md:grid-cols-4">

                <div className="col-span-3">
                     <h2 className="text-5xl">News Details</h2>
                     <p>{id}</p>
                </div>
                <div>
                    <RightSideNav />
                </div>

             </div>
        </div>
    );
};

export default NewsDetails;