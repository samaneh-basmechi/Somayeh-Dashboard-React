import React from 'react';

function UserInformation() {
    const info = {
        "id": 1,
        "username": "admin",
        "email": "admin@admin.com",
        "isAdmin": true,
        "f1Access": true,
        "f2Access": true,
        "f3Access": true,
        "f4Access": true,
        "isActive": true,
        "activatedAt": "2023-10-27T07:04:42.000Z",
        "createdAt": "2023-10-27T07:04:42.000Z"
    }

    return (
        <div className="px-6">
            <h3 className="text-black dark:text-white text-2xl text-center mb-4 font-bold">{info.username}</h3>
            <p className="text-black dark:text-white mb-4"><span className="font-bold mr-2">Email:</span> {info.email}</p>
            <p className="text-black dark:text-white mb-4"><span className="font-bold mr-2">Permissions:</span>
                {info.f1Access && (
                    <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">Allow to Upload function one</span>)}

                {info.f2Access && (
                    <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">Allow to Upload function two</span>)}
                {info.f3Access && (
                    <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">Allow to Upload function three</span>)}
                {info.f4Access && (
                    <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">Allow to Upload function four</span>)}
            </p>
        </div>
    );
}

export default UserInformation;

