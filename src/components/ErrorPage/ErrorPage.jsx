
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);

    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Oops !!!</h3>
            <p>{error.statusText || error.message}</p>
            <button className='bg-red-500 text-white px-4 py-1 rounded-md' onClick={handleGoBack}>Go Back</button>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                </div>
            }
        </div>
    );
};

export default ErrorPage;