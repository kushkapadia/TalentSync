import React from 'react'

function Landing(){
    return (
        <div className="app-container">
          <header className="header">
            <h1>Welcome John Doe</h1>
            <p>Build your profile now to showcase your skills and achievements</p>
          </header>
    
          <section className="section">
            <h2>About this initiative</h2>
            <p>
              Profile helps you to showcase your personality, skills, achievements, areas of expertise, and advancements in your career.
              This platform enables students to highlight their strengths, which helps employers or teachers to understand your potential better.
            </p>
          </section>
    
          <section className="features-section">
            <div className="feature">
              <h3>What does this profile portal do?</h3>
              <p>
                The main goal of this portal is to bridge the gap between faculty mentors and students. It acts as a credible source of student information and showcases both academic and professional growth.
              </p>
            </div>
            <div className="feature">
              <h3>How will this benefit undergraduates?</h3>
              <p>
                This portal helps faculty mentors recognize student expertise and skills to write effective letters of recommendation. It provides students with an organized profile to display their academic and professional competence.
              </p>
            </div>
          </section>
    
          <section className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item">
              <h4>What is the purpose of this portal?</h4>
              <p>This portal allows students to showcase their achievements, skills, and academic progress in one organized place.</p>
            </div>
            <div className="faq-item">
              <h4>How often should I update my profile?</h4>
              <p>We recommend updating your profile every six months to keep track of your ongoing progress.</p>
            </div>
          </section>
    
          <section className="contact-section">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@djsc.it">support@djsc.it</a></p>
          </section>
    
          <footer className="footer">
            <p>© 2023 DJSC Information Technology. All rights reserved.</p>
          </footer>
        </div>
      )
}

export default Landing