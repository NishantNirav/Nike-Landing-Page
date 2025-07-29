const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="Logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="Location">Location</li>
                <li href="About">About</li>
                <li href="Contact">Contact</li>
            </ul>
            <button>Login</button>
        </nav>

    );
}
export default Navigation