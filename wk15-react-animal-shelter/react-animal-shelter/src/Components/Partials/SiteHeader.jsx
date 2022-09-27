import {Link} from 'react-router-dom'

function SiteHeader() {
    // can put in useState, then render header accordingly if user is logged in/out/expired
    const token = localStorage.getItem('user_token')

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className='navbar-brand'>Animals Shelter</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-link"><Link to="/">Animals</Link></li>

                        {
                            token ? (
                                <li className="nav-link"><Link to="/profile">Profile</Link></li>
                            ) : (
                                <>
                                    <li className="nav-link"><Link to="/register">Register</Link></li>
                                    <li className="nav-link"><Link to="/login">Login</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SiteHeader