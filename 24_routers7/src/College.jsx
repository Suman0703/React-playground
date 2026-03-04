import { Link, Outlet } from "react-router";

function College() {

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>College Section</h1>

                <div>
                    <ul style={styles.list}>
                        <li>
                            <Link style={styles.link} to="">Student</Link>
                        </li>
                    </ul>

                    <ul style={styles.list}>
                        <li>
                            <Link style={styles.link} to="departments">Departments</Link>
                        </li>
                    </ul>

                    <ul style={styles.list}>
                        <li>
                            <Link style={styles.link} to="details">College Details</Link>
                        </li>
                    </ul>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white"
    },
    content: {
        textAlign: "center"
    },
    title: {
        fontSize: "38px",
        marginBottom: "20px",
        backgroundColor: "#1e3c72",
        padding: "15px 30px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,255,0.4)"
    },
    list: {
        listStyle: "none",
        padding: "10px"
    },
    link: {
        textDecoration: "none",
        color: "white",
        backgroundColor: "#1e3c72",
        padding: "10px 20px",
        borderRadius: "8px",
        display: "inline-block",
        transition: "0.3s ease"
    }
};

export default College;