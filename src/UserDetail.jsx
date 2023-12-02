import React, { useState, useEffect } from "react"
import axios from "axios";


let UserDetail = () => {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then((response) => {
                setUserDetails(response.data);
                console.log(response)
            })
            .catch((errors) => {
                if (errors)
                    throw errors
            })
            .finally(() => {
                console.log("API Executed")
            })
    }, []);


    return (
        <div>
            <h3>User Details</h3>

            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Location</th>
                    </tr>
                    {userDetails.map((details) => {
                        return (
                            <tr>
                                <td>{details.id}</td>
                                <td>{details.name}</td>
                                <td>{details.email}</td>
                                <td>{details.mobile}</td>
                                <td>{details.location}</td>
                            </tr>
                        )
                    })}
                </thead>

            </table>
        </div>
    )
}
export default UserDetail;
