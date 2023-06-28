import './navbar.css';

function navbar(){
    return (
           <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>Kushagra Sinha</div>
            <div className="nav-components">
                <div><a className="link"href='#'>Home</a></div>
                <div><a className="link"href='#'>About Us</a></div>
                <div><a className="link"href='#'>Contact</a></div>
            </div>
            <div className="sign-in">
                   <div className='SignIn'><a className='link-sign'href="#">Sign In</a></div>
                   <div className='SignUp'><a className='link-sign'href="#">Sign Up</a></div>
            </div>
            </div>
           </div>
    );
}

export default navbar;
