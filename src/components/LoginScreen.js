import { useState } from "react";

function LoginScreen({ onLoginComplete }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.success) {
                onLoginComplete();
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Cannot reach backend.");
        }
    };

    return (
        <div className="login-screen">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </form>

            <button
                style={{ marginTop: "15px", backgroundColor: "#ccc", padding: "8px 16px", borderRadius: "6px" }}
                onClick={onLoginComplete}
            >
                Exit
            </button>
        </div>
    );
}

export default LoginScreen;
