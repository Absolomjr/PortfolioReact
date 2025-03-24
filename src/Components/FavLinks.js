import React from 'react'

function FavLinks() {
    return (
      <section className="favlinks-section">
        <h3>My Favourite Links</h3>
        <div className="links-container">
          <p>
            Link to my favourite website:{" "}
            <a 
              href="https://www.premierleague.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              My favourite website
            </a>
          </p>
          <p>
            <a 
              href="https://cse.ucu.ac.ug" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Computing Department Website
            </a>
          </p>
        </div>
      </section>
    );
  }
  
  export default FavLinks;