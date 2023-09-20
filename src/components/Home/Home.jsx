import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Phones from "../Phones/Phones";
import ReCharts from "../ReCharts/ReCharts";
import { RotatingLines } from "react-loader-spinner";



const Home = () => {
    const navigation = useNavigation();
    // console.log(navigation);
    return (
        <>
            <Header></Header>
            {
                navigation.state === "loading" ?
                    <div className="flex justify-center">
                        <RotatingLines>
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        </RotatingLines>
                    </div>
                    :
                    <Outlet></Outlet>
            }
            {/* <Phones></Phones> */}
        </>
    );
};

export default Home;