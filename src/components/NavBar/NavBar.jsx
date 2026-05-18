import { Link } from 'react-router';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <Link to="/">멋사 블로그</Link>
            </div>
            
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}