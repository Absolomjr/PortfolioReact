import React from 'react'

function MyHobbiesComponent() {
    return (
      <section className="hobbies-section">
        <h3>Video Demonstrating My Hobbies of Dancing</h3>
        <video width="640" height="360" controls autoPlay loop muted poster="thumbnail.jpg">
          <source src='/dancing.mp4' type="video/mp4" />
          <source src="videos/dancing.ogg" type="video/ogg" />
          <source src="videos/dancing.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
  
        <h3>Youtube demonstrating my hobbies</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/3a-SwUgw4TA" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          title="Hobbies Video"
        />
      </section>
    );
  }
  
  export default MyHobbiesComponent;