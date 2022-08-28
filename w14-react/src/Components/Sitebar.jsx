function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://google.com">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://google.com">Another</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar