import { useState, useEffect } from "react";

function UserList() {

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    async function getUserData() {
        const URL = "http://localhost:3000/users";

        let response = await fetch(URL);
        let data = await response.json();

        setUsersData(data);
        setLoading(false);
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Users List</h1>

            {
                !loading ?
                    usersData.map((user) => (
                        <div key={user.id} style={styles.card}>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Role:</strong> {user.role}</p>
                            <p><strong>Hobby:</strong> {user.hobby}</p>
                        </div>
                    ))
                    :
                    <h2 style={styles.loading}>Data Loading...</h2>
            }

        </div>
    );
}

const styles = {
    container: {
        width: "500px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
    },

    heading: {
        marginBottom: "30px",
        color: "#333"
    },

    card: {
        backgroundColor: "#f5f5f5",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
        textAlign: "left"
    },

    loading: {
        color: "#555"
    }
};

export default UserList;