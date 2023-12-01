export default function DaysList () {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return (
        <div className="container form-control">
        <h2>Availabilty</h2>
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
}
