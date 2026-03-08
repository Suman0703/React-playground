import { useState, useEffect } from "react";

function UserList() {

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);

    // states for editing
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editRole, setEditRole] = useState("");
    const [editHobby, setEditHobby] = useState("");

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

    //Delete Function
    async function deleteUser(id) {
        const URL = `http://localhost:3000/users/${id}`;

        await fetch(URL, {
            method: "DELETE"
        });

        //Update UI without refreshing it
        setUsersData(usersData.filter((user) => user.id !== id));
    }

    // edit function
    function startEdit(user) {
        setEditId(user.id);
        setEditName(user.name);
        setEditRole(user.role);
        setEditHobby(user.hobby);
    }

    //update API
    async function updateUser(id) {
        const URL = `http://localhost:3000/users/${id}`;

        await fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editName,
                role: editRole,
                hobby: editHobby
            })
        });

        getUserData();
        setEditId(null);
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Users List</h1>

            {
                !loading ?
                    usersData.map((user) => (
                        <div key={user.id} style={styles.card}>

                            {editId === user.id ? (
                                <>
                                    <input
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        style={styles.input}
                                    />

                                    <input
                                        value={editRole}
                                        onChange={(e) => setEditRole(e.target.value)}
                                        style={styles.input}
                                    />

                                    <input
                                        value={editHobby}
                                        onChange={(e) => setEditHobby(e.target.value)}
                                        style={styles.input}
                                    />

                                    <button
                                        style={styles.updateBtn}
                                        onClick={() => updateUser(user.id)}
                                    >
                                        Update
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Role:</strong> {user.role}</p>
                                    <p><strong>Hobby:</strong> {user.hobby}</p>

                                    <button
                                        style={styles.editBtn}
                                        onClick={() => startEdit(user)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        style={styles.deleteBtn}
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </>
                            )}

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

    deleteBtn: {
        marginTop: "10px",
        padding: "8px 14px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },

    // Added styles
    editBtn: {
        marginTop: "10px",
        marginRight: "10px",
        padding: "8px 14px",
        backgroundColor: "orange",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },

    updateBtn: {
        marginTop: "10px",
        padding: "8px 14px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },

    input: {
        width: "90%",
        padding: "8px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
    },

    loading: {
        color: "#555"
    }
};

export default UserList;