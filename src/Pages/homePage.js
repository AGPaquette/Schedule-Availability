import { useEffect, useState } from "react"

export default function HomePage() {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    useEffect(() => {
        const fetchAvalibility = async () => {
            const response = await fetch()
        }
    }, [])

    return (
        <div className="container form-control">
            <h2>Username</h2>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        {days.map((day, index) => (
                        <th scope="col" key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
            <tbody>

            </tbody>
        </table>   
        </div>
    )
};