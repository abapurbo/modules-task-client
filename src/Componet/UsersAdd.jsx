import React, { useContext } from 'react';
import { IoPlayBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthPorvider/AuthProvider';
const UsersAdd = () => {
    const { createUser } = useContext(AuthContext)
    const handleAddUser = e => {

        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password=e.target.email.value
        const gender = e.target.gender.value;
        const status = e.target.status.value;
        console.log(name, email, gender, status)
        const user = { name, email, gender, status }

        // create user
        createUser(email,password)
            .then(result => {
                console.log(result.user)
                // insert mongodb database
                fetch('http://localhost:3000/users', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Successfully added user in mongodb ",
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                        e.target.reset()
                    })
            })


    }

    return (
        <div>

            <div className='my-18 flex flex-col items-center  relative space-y-10 mx-56'>
                <div className='absolute left-0  text-blue-300'>
                    <Link to="/allUser" className='flex flex-row items-center space-x-1'> <IoPlayBackSharp /> <span className='cursor-pointer font-semibold '>All Users</span></Link>

                </div>

                <div className='text-center '>

                    <h1 className='text-4xl font-semibold'>New Users</h1>
                    <p className='text-xl font-thin'>Use the below form to create a new account</p>
                </div>
                <form onSubmit={handleAddUser} className=' w-full'>
                    <div className='flex flex-col space-y-1 w-full '>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='border rounded-xs out p-2' placeholder='User name' id="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='border-1 p-2 ' placeholder='Email' id="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email">password</label>
                        <input type="password" name="password" className='border-1 p-2 ' placeholder='password' id="" />
                    </div>
                    <div className='mt-4 '>
                        <div className='space-x-5'>
                            <label className='font-semibold' for="Gender">Gender:</label>
                            <input type="radio" name="gender" value='Male' />
                            <label for="Male">Male</label>
                            <input type="radio" name="gender" value='Male' />
                            <label for='female'>Female</label>
                        </div>
                        <div className='space-x-5'>
                            <label className='font-semibold' for="status">Status:</label>
                            <input type="radio" name="status" value='Active' /><label for="Active">Active</label>
                            <input type="radio" name="status" value='Inactive' />
                            <label for="inactive">Inactive</label>
                        </div>



                    </div>
                    <div className='w-full mt-12 text-center '>
                        <input type="submit" className='btn bg-green-400 w-96 text-xl ' value="Save" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UsersAdd;