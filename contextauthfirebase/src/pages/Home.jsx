import { auth } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const { user } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut()
        navigate("/")
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Olá, {user?.email} 👋</h1>
                <p style={styles.text}>Você está logado!</p>
                <button onClick={handleLogout} style={styles.button}>Sair</button>
            </div>
        </div>
    );
}
const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    title: {
        marginBottom: "20px",
        color: "#333",
    },
    text: {
        color: "#222", 
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#43cea2",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background 0.3s",
    },
};