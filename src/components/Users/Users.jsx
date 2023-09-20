import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    // console.log(users);

    const navigate = useNavigate();
    const handleDetails=(id)=>{
        navigate(`/user/${id}`)
    }

    return (
        <div>
            <p className="text-3xl font-extrabold mb-4">Users:{users.length}</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user =>
                        <div key={user.id} className="border-2 border-red-500 rounded-lg p-4">
                            <h1 className="text-2xl font-bold">Name: {user.name}</h1>
                            <p className="text-xl font-semibold">Email: {user.email}</p>
                            <p className="text-xl font-medium">Phone: {user.phone}</p>
                            <button className="bg-blue-500 text-white font-bold px-4 py-1 mt-4 rounded-md"><Link to={`/user/${user.id}`} >See Details</Link></button>
                            <button onClick={()=>handleDetails(user.id)} className="bg-blue-500 ml-2 px-4 py-1 rounded-md text-white">Details</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;