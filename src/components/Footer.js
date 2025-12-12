import "./styling.css";

export default function Footer({
    articleTitle,
    setArticleTitle,
    articleDescription,
    setArticleDescription,
    handleAddArticle
}) {
    const onSubmit = (e) => {
        e.preventDefault();
        handleAddArticle();
    };

    return (
        <footer className="footer">
            <form className="footer-form" onSubmit={onSubmit}>

                <div className="footer-input-group">
                    <label className="footer-label">Article URL</label>
                    <input
                        type="text"
                        placeholder="Enter article URL"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        className="footer-input"
                    />
                </div>

                <div className="footer-input-group">
                    <label className="footer-label">Article Description</label>
                    <input
                        type="text"
                        placeholder="Enter short description"
                        value={articleDescription}
                        onChange={(e) => setArticleDescription(e.target.value)}
                        className="footer-input"
                    />
                </div>

                <div className="footer-btn-group">
                    <button className="footer-add-btn" type="submit">Add Article</button>
                </div>
            </form>
        </footer>
    );
}
