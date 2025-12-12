import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AddArticle from './components/AddArticle';
import LoginScreen from './components/LoginScreen';
import { useState } from "react";

function App() {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="App">

            {!showLogin && (
                <div className="login-container">
                    <button
                        className="login-button"
                        onClick={() => setShowLogin(true)}
                    >
                        Login
                    </button>
                </div>
            )}
            {showLogin ? (
                <LoginScreen onLoginComplete={() => setShowLogin(false)} />
            ) : (
                <>
                    <Banner />
                    <AddArticle />
                    <Footer />
                </>
            )}

        </div>
    );
}

export default App;