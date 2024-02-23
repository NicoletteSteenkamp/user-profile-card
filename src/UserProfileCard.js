import React from 'react';
import profilePicture from "../images/Profile-Picture.jpg";
function UserProfileCard() {
    
    return (
        <div className="user-profile-card">
           <img className="profilePicture" src={profilePicture} alt="Nicolette" />
            <h2>Nicolette Steenkamp</h2>
            <p>As a junior software engineer, I bring a passion for problem-solving and a solid foundation in programming principles to the table. With a keen eye for detail and a drive to learn and adapt, I am committed to delivering high-quality solutions that meet both user needs and technical requirements.

My academic background, combined with practical experience gained through i personal projects, has equipped me with proficiency in various programming languages and development tools. I am comfortable collaborating with cross-functional teams and contributing positively to project objectives.

Eager to further develop my skills and contribute to innovative projects.</p>
        </div>
    );
}

export default UserProfileCard;