import React from 'react'
import "./leaderboard.css"
export default function Leaderboard(){
    // data from ranking API
    const data = [
        {
            username:"Chad Amandeep",
            level : 11,
            points : 110
        },
        {
            username:"Ajay Nath",
            level : 5,
            points : 50
        },
        {
            username:"Patika",
            level : 4,
            points : 40
        },
        {
            username:"KKJ the Almighty",
            level : 1,
            points : 0
        },
        {
            username:"Chad Amandeep",
            level : 11,
            points : 110
        },
        {
            username:"Ajay Nath",
            level : 5,
            points : 50
        },
        {
            username:"Patika",
            level : 4,
            points : 40
        },
        {
            username:"KKJ the Almighty",
            level : 1,
            points : 0
        }
    ]
    const renderUser = (user,index) => {
        return (
            <tr>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.level}</td>
                <td>{user.points}</td>
            </tr>
        )
    }

    return (
        <div className="main">
            <div className="ctfHeader">
            CTF
            </div>
            <div className="leaderboardHeader">Leaderboard</div>
            <div className="tableContainer">
            <table className="table table-bordered  table-responsive">
                <thead >
                    <tr>
                        <th className="col-lg-1">Rank</th>
                        <th className="col-lg-5">Username</th>
                        <th className="col-lg-2">Level</th>
                        <th className="col-lg-3">Points</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(renderUser)}
                </tbody>
            </table>   
            </div>
        </div>
    )
}