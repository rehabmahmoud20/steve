import React from 'react';
import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="container flex">
            <div className="col1">
                <h2>Study</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin</p>
            </div>
            <div className="col2">
                <h3>Nos services</h3>
                <ul>
                    <li>Avis clients</li>
                    <li>Mentions legales</li>
                    <li>Plan du site</li>
                    <li>Blog d’Idéematic</li>
                    <li>Le dictionnaire du digital</li>
                    <li>&lt;Notre boutique /&gt;</li>
                </ul>
            </div>
            <div className="col3">
                <h3>Sign up for Special Offers!</h3>
                <div>
                    <input type="text" placeholder="Mail"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;