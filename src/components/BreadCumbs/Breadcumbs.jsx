import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(segment => segment); 

    const crumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`; // Constructing the path for each breadcrumb
        return (
            <span key={index} className="opacity-60 capitalize">
                {index > 0 && " >> "} {/* Adding separator if it's not the first segment */}
                <Link to={path}>{segment}</Link>
            </span>
        );
    });

    // Prepend "Home" to the breadcrumbs if it's not already the first segment
    if (pathSegments[0] !== "Home" && pathSegments.length > 0) {
        crumbs.unshift(
            <span key="home" className="opacity-60 font-PoppinsRegular">
                <Link to="/">Home</Link>
                {" >> "}
            </span>
        );
    }

    return (
        <div className="p-10 text-center bg-lime-600 text-white">
            <h2 className="capitalize text-2xl font-PoppinsRegular"> {pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "Home"}</h2> {/* Displaying the last segment as the page name */}
            {crumbs}
        </div>
    );
};

export default BreadCrumbs;
