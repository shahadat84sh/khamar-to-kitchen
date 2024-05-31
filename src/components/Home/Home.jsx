import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CityList from "../CityList/CityList";
import FreshFood from "../FreshFood/FreshFood";
import NewsLetter from "../NewsLetter/NewsLetter";
import Organic from "../Organic/Organic";
import Speciality from "../Specialiy/Speciality";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Khamar 2 kitchen || Home</title>
            </Helmet>
            <Banner></Banner>
            <Speciality></Speciality>
            <CityList></CityList>
            <Organic></Organic>
            <FreshFood />
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;