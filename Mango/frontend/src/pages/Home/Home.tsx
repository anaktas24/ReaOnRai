import React from 'react';
import './Home.css'; // Import your CSS styles
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner'; // Adjust the path as necessary
import Footer from '../../components/Footer/Footer';
const Home: React.FC = () => {
    return (
        <div className="homepage">
                  <Banner />
            <header className="homepage-header">
                <h1>Welcome to the Migration Site</h1>
                <p>Your gateway to resources and community support.</p>
            </header>
            <main className="homepage-content">
                <section className="content-section">
                    <h2>Resources</h2>
                    <p>Explore a variety of resources tailored for your needs.</p>
                </section>
                <section className="content-section">
                    <h2>Legal Guidance</h2>
                    <p>Get expert advice on legal matters related to migration.</p>
                </section>
                <section className="content-section">
                    <h2>Community</h2>
                    <p>Join a community of individuals sharing their migration stories.</p>
                </section>
            </main>
            <Footer />

            <Navbar />
        </div>
    );
};

export default Home;