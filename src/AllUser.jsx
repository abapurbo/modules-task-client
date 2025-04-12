import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUser = () => {
    const loader = useLoaderData()
    const [users, setUsers] = useState(loader)
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://modules-task-client.vercel.app/users/${id}`,{
                    method:'delete'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "UserInfo deleted successfully!",
                            icon: "success"
                        })
                    }
                      
                })
                const remaining=users.filter(user=>user._id!==id)
                setUsers(remaining)
              
            }
        });
    }
    return (
        <div>
            <div className="m-18">
                <table className="table ">
                    {/* head */}
                    <thead className='bg-gray-900 text-white'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {/* row 1 */}
                        {
                            users.map((user, index) => (
                                <tr key={index} className='font-semibold'>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td className='space-x-1 font-semibold'><Link to={`/update/${user._id}`}><button className='btn btn-accent'>Edit</button></Link><button onClick={() => handleDelete(user._id)} className='btn btn-warning'>x</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;