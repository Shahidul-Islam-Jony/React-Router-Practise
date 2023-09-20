import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,username,email,phone,website,} =user;
    // console.log(user);

    // const {userId} = useParams();
    // console.log(userId);

    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }

    return (
        <div className='border-2 border-yellow-700 w-fit mx-auto p-8 rounded-md bg-slate-300'>
            <h1 className='text-3xl font-bold'>Name : {name}</h1>
            <h2 className='text-2xl font-bold'>Nike Name : {username}</h2>
            <p className='text-2xl font-semibold'>Email : {email}</p>
            <p className='text-xl font-semibold'>Phone : {phone}</p>
            <p className='text-xl font-semibold'>City: {user.address.city}</p>
            <p className='text-xl font-semibold'>Zip code: {user.address.zipcode}</p>
            <p className='text-xl font-semibold'>Website : {website}</p>
            <button className='mt-4 bg-blue-500 px-4 py-1 rounded-md font-semibold text-white ' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;