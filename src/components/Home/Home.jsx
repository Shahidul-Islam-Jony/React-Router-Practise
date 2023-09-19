import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Phones from "../Phones/Phones";
import ReCharts from "../ReCharts/ReCharts";

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Phones></Phones> */}
        </>
    );
};

export default Home;