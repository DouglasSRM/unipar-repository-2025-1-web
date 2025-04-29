import { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleCadastro = async (e) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth, email, senha)
            alert("Usuário cadastrado!")
            navigate("/")
        } catch(error) {
            alert("Problema ao cadastrar: " + error.message)
        }
    }   

    const goToLogin = () => {
        navigate("/")
    }

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleCadastro}>
                <h2 style={styles.title}>Cadastro</h2>

                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Cadastrar</button>

                {/* Link para login */}
                <p style={styles.linkText}>
                    Já tem conta?{" "}
                    <span style={styles.link} onClick={goToLogin}>
                        Faça login
                    </span>
                </p>
            </form>
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
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    },
    form: {
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        width: "300px",
    },
    title: {
        marginBottom: "20px",
        textAlign: "center",
        color: "#333",
    },
    input: {
        marginBottom: "15px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#ff6b81",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background 0.3s",
        marginBottom: "20px",
    },
    linkText: {
        fontSize: "14px",
        textAlign: "center",
        color: "#666",
    },
    link: {
        color: "#ff6b81",
        cursor: "pointer",
        textDecoration: "underline",
    },
};
