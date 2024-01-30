import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <nav>
                <h2>Movie Review App</h2>
                <ul>
                    <li><Link to ="movie/get-all">Display All</Link></li>
                    <li><Link to ="movie/create">Create Movie</Link></li>
                    <li><Link to ="review/create">Create Review</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;