import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const params=useParams()
    const user=useLoaderData()
    console.log(user)
    console.log(params)
    const updateUser=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const gender=e.target.gender.value;
        const status=e.target.status.value;
        const updateUser={name,email,gender,status}
        console.log(name,email,gender,status)
        fetch(`https://modules-task-client.vercel.app/users/${params.id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
 
    return (
        <div className='mx-66 relative mt-22'>
            <div className='absolute left-0  text-blue-300'>
                <Link to="/allUser" className='flex flex-row items-center space-x-1'>  <button className='cursor-pointer  text-blue-500 btn shadow-xl bg-white font-bold  '>New User</button></Link>

            </div>

            <div className='text-center '>

                <h1 className='text-4xl font-semibold'>Update User</h1>
                <p className='text-xl font-thin'>Use the below form to create a new account</p>
            </div>
            <form onSubmit={updateUser} className=' w-full'>
                <div className='flex flex-col space-y-1 w-full '>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className='border rounded-xs out p-2' defaultValue={user.name} placeholder='User name' id="" />
                </div>
                <div className='flex flex-col space-y-1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className='border-1 p-2 ' defaultValue={user.email} placeholder='Email' id="" />
                </div>
                <div className='mt-4 '>
                    <div className='space-x-5'>
                        <label className='font-semibold' for="Gender">Gender:</label>
                        <input type="radio" name="gender" checked={user.gender.toLowerCase()==='male'} value='Male' id='male'/>
                        <label for="Male">Male</label>
                        <input type="radio" name="gender" checked={user.gender.toLowerCase()==='female'} value='Female' id='female' />
                        <label for='female'>Female</label>
                    </div>
                    <div className='space-x-5'>
                        <label className='font-semibold' for="status">Status:</label>
                        <input type="radio" name="status" value='active' /><label for="Active">Active</label>
                        <input type="radio" name="status" value='inactive' />
                        <label for="inactive">Inactive</label>
                    </div>



                </div>
                <div className='w-full mt-12 text-center '>
                    <input type="submit" className='btn bg-green-400 w-96 text-xl ' value="Save" />
                </div>
            </form>
        </div>

       
    );
};

export default Update;