import { useState } from "react";

function AddArticle() {

    const [articleUrl, setArticleUrl] = useState("");
    const [articles, setArticles] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (articleUrl.trim() === "") return;

        setArticles([
            ...articles,
            {
                url: articleUrl,
                id: Date.now(),
            }
        ]);

        setArticleUrl("");
    };

    return (
        <div className="add-article">

            <form onSubmit={handleSubmit} className="article-form">
                <input
                    className="textbox"
                    type="text"
                    placeholder="Paste an article link"
                    value={articleUrl}
                    onChange={(e) => setArticleUrl(e.target.value)}
                />
                <button type="submit">Add Article</button>
            </form>

            <div className="article-list">
                {articles.map((a) => (
                    <div key={a.id} className="article-bubble">
                        <a
                            href={a.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {a.url}
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default AddArticle;

