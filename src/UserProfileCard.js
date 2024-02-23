import React from 'react';
import './image';
function UserProfileCard() {
    return (
        <div className="user-profile-card">
            <img src={'./profile.jpeg'} alt="Profile" />
            <h2>Nicolette Steenkamp</h2>
            <p>A short bio about John Doe...</p>
        </div>
    );
}

export default UserProfileCard;