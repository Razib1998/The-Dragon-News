import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSIdeNav/LeftSideNav";
import Navbar from "../Shared/Navabr/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-2xl font-poppins">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h2 className="text-2xl">News coming soon..</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;