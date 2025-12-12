import React from "react";

function AddArticle({ articles, setArticles }) {
    const deleteArticle = (id) => {
        setArticles(prev => prev.filter(a => a.id !== id));
    };

    return (
        <div className="add-article">
            <h3>Articles</h3>

            <div className="article-list">
                {articles.map((article) => (
                    <div key={article.id} className="article-bubble">
                        <button
                            className="delete-icon"
                            onClick={() => deleteArticle(article.id)}
                            aria-label="Delete article"
                            title="Delete"
                        >
                            ???
                        </button>

                        <a href={article.url} target="_blank" rel="noreferrer" className="article-link">
                            {article.description}
                        </a>

                        <div className="posted-user">— <i>{article.user}</i></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddArticle;
