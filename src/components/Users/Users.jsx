import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <p className="text-3xl font-extrabold mb-4">Users:{users.length}</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user =>
                        <div className="border-2 border-red-500 rounded-lg p-4">
                            <h1 className="text-2xl font-bold">Name: {user.name}</h1>
                            <p className="text-xl font-semibold">Email: {user.email}</p>
                            <p className="text-xl font-medium">Phone: {user.phone}</p>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;