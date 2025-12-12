import React, { useState } from "react";
import Banner from "./components/Banner";
import AddArticle from "./components/AddArticle";
import Footer from "./components/Footer";
import "./components/styling.css";

function App() {
    const [articles, setArticles] = useState([
        {
            url: "https://www.msn.com/en-us/sports/nfl/espn-s-dan-orlovsky-names-three-nfl-teams-that-should-trade-for-joe-burrow/ar-AA1SaF7f",
            description: "ESPN’s Dan Orlovsky names three NFL teams that should trade for Joe Burrow",
            user: "admin"
        },
        {
            url: "https://www.msn.com/en-us/sports/other/kansas-state-football-assistant-coach-tracker-under-collin-klein/ar-AA1Sd7zc",
            description: "Kansas State football assistant coach tracker under Collin Klein",
            user: "admin"
        },
        {
            url: "https://www.msn.com/en-us/money/markets/eu-set-to-lock-up-russia-s-frozen-assets-so-hungary-and-slovakia-can-t-veto-their-use-for-ukraine/ar-AA1Sd5ZN",
            description: "EU set to lock up Russia's frozen assets so Hungary and Slovakia can't veto their use for Ukraine",
            user: "admin"
        }
    ]);

    // Controlled inputs lived here so Footer receives setter functions
    const [articleTitle, setArticleTitle] = useState("");
    const [articleDescription, setArticleDescription] = useState("");

    const handleAddArticle = () => {
        // simple validation
        if (!articleTitle.trim()) return;

        const newArticle = {
            url: articleTitle, // you're treating title input as URL — adjust if you have separate url field
            description: articleDescription || "No description",
            user: "admin",
            id: Date.now()
        };

        setArticles(prev => [newArticle, ...prev]);

        // reset inputs
        setArticleTitle("");
        setArticleDescription("");
    };

    return (
        <div className="App">
            <Banner />
            <AddArticle articles={articles} setArticles={setArticles} />
            <Footer
                articleTitle={articleTitle}
                setArticleTitle={setArticleTitle}
                articleDescription={articleDescription}
                setArticleDescription={setArticleDescription}
                handleAddArticle={handleAddArticle}
            />
        </div>
    );
}

export default App;

