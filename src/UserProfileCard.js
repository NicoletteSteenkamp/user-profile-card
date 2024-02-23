import React from 'react';
import profilePicture from "../src/images/profile.jpg";


function UserProfileCard() {
    
    return (
        <div className="user-profile-card">
           <img className="profilePicture" src={profilePicture} alt="Nicolette" />
            <h2>Nicolette Steenkamp</h2>
            <h3>software Engineer | Fullstack devloper</h3>
            <h4>Technologies: HTML,CSS,Javascript,React</h4>
            <p>As a junior software engineer, I bring a passion for problem-solving and a solid foundation in programming principles to the table. With a keen eye for detail and a drive to learn and adapt, I am committed to delivering high-quality solutions.

My academic background, combined with practical experience gained through personal projects, has equipped me with proficiency in various programming languages and development tools.

Eager to further develop my skills and contribute to innovative projects.</p>
        

    
</div>
    );
}

export default UserProfileCard;