import React, { useState } from 'react';

const Profile = ({ user }) => {
    const [avatar, setAvatar] = useState(user.avatar);

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
    };

    return (
        <div className="profile">
            <h2>Профил</h2>
            <img src={avatar} alt="Avatar" style={{ width: '100px', height: '100px' }} />
            <input type="text" value={avatar} onChange={handleAvatarChange} placeholder="URL на аватар" />
        </div>
    );
};

export default Profile;