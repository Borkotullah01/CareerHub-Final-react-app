import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-primary py-10">404 ooops! page not found</h1>
            <div className="text-center py-6">
                <Link to={-1}>
                <button className="btn btn-info text-white">Go Back</button>
                </Link>
                
            </div>
        </div>
    );
};

export default ErrorPage;