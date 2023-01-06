import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './userDetails.css';

function UserDetails() {
    const [user, setUser] = useState([])

    const getUserDetail = async () => {
        const response = await fetch('https://api.github.com/users')
        setUser(await response.json())
    }

    useEffect(() => {
        getUserDetail()
    }, [])

    return (
        <>
            <h2>List of github users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {user.map((data, key) => {
                        return (
                            <div className="col-10 col-md-4 mt-5" key={key}>
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                    <div className="image">
                                <img src={data.avatar_url} alt={""} className="round" width="155" /></div>
                               
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"> {data.login}</h4><span className="textLeft">{data.type}</span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div className="d-flex flex-column">
                                            <span className="articles">Articles</span><span className="number1">38</span>
                                        </div>
                                         <div className="d-flex flex-column">
                                            <span className="follower">Follower</span><span className="number2">980</span>
                                        </div>
                                         <div className="d-flex flex-column">
                                            <span className="rating">Rating</span><span className="number3">7.8</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </>
    );
}

export default UserDetails;