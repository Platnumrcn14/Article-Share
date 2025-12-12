import { useState } from "react";

function AddArticle() {
    // Default articles preloaded when user enters the site
    const [articles, setArticles] = useState([
        {
            url: "https://www.msn.com/en-us/sports/nfl/espn-s-dan-orlovsky-names-three-nfl-teams-that-should-trade-for-joe-burrow/ar-AA1SaF7f?ocid=msedgntp&pc=U531&cvid=693b9b5362844358b6f3cfacc85afcd5&ei=14",
            description: "ESPN’s Dan Orlovsky names three NFL teams that should trade for Joe Burrow"
        },
        {
            url: "https://www.msn.com/en-us/sports/other/kansas-state-football-assistant-coach-tracker-under-collin-klein/ar-AA1Sd7zc?ocid=msedgntp&pc=U531&cvid=693b9b5362844358b6f3cfacc85afcd5&ei=34",
            description: "Kansas State football assistant coach tracker under Collin Klein"
        },
        {
            url: "https://www.msn.com/en-us/money/markets/eu-set-to-lock-up-russia-s-frozen-assets-so-hungary-and-slovakia-can-t-veto-their-use-for-ukraine/ar-AA1Sd5ZN?ocid=msedgntp&pc=U531&cvid=693b9b5362844358b6f3cfacc85afcd5&ei=50",
            description: "EU set to lock up Russia's frozen assets so Hungary and Slovakia can't veto their use for Ukraine"
        }
    ]);

    const [urlInput, setUrlInput] = useState("");
    const [descInput, setDescInput] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();

        if (!urlInput) return;

        setArticles([
            ...articles,
            {
                url: urlInput,
                description: descInput || "No description"
            }
        ]);

        setUrlInput("");
        setDescInput("");
    };

    return (
        <div className="add-article">
            <h3>Articles</h3>

            {articles.map((article, index) => (
                <div key={index} className="article-bubble">
                    <a href={article.url} target="_blank" rel="noreferrer">
                        {article.description}
                    </a>
                </div>
            ))}

            <form onSubmit={handleAdd} className="article-form">

                <input
                    type="text"
                    className="article-input"
                    placeholder="Enter article URL..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />

                <input
                    type="text"
                    className="article-input"
                    placeholder="Enter short description..."
                    value={descInput}
                    onChange={(e) => setDescInput(e.target.value)}
                />

                <button type="submit" className="add-button">
                    Add Article
                </button>

            </form>

        </div>
    );
}

export default AddArticle;
