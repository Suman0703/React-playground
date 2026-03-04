import { Link } from "react-router";

function PageNotFound() {

    const containerStyle = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        textAlign: "center",
        padding: "20px"
    };

    const imageStyle = {
        width: "200px",
        marginBottom: "20px"
    };

    const headingStyle = {
        fontSize: "80px",
        margin: "0",
        fontWeight: "bold"
    };

    const subHeadingStyle = {
        fontSize: "28px",
        margin: "10px 0",
        color: "#00bcd4"
    };

    const buttonStyle = {
        textDecoration: "none",
        padding: "12px 25px",
        backgroundColor: "#00bcd4",
        color: "white",
        borderRadius: "25px",
        fontWeight: "600",
        marginTop: "20px",
        transition: "0.3s ease"
    };

    return (
        <div style={containerStyle}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="404 Error"
                style={imageStyle}
            />

            <h1 style={headingStyle}>404</h1>
            <h2 style={subHeadingStyle}>Oops! Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>

            <Link to="/home" style={buttonStyle}>
                Go Back Home
            </Link>
        </div>
    );
}

export default PageNotFound;