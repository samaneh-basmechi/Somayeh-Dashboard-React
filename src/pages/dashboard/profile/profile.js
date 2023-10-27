import React from 'react';
import UserInformation from './user-information'
import ChangePassword from './change-password'

function Profile() {

    return (
        <main className="overflow-auto h-[calc(100vh_-_80px)] p-6 bg-black overflow-auto">
            <div className="bg-gray-800 p-4 rounded overflow-hidden shadow-lg">
                <UserInformation />
                <hr className="mb-4" />
                <ChangePassword />
            </div>
        </main>
    );
}

export default Profile;

