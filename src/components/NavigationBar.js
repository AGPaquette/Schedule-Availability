import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <div>
                <Link to='/'>
                    <h1>Schedule Generator</h1>
                </Link>
            </div>
        </header>
    )
}
