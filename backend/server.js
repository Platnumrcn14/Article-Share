const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = db.prepare(`SELECT * FROM users WHERE username = ?`).get(username);

    if (!user) return res.status(401).json({ error: "Invalid login" });

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid login" });

    return res.json({ success: true });
});

app.listen(5000, () => console.log("Secure backend running on port 5000"));
