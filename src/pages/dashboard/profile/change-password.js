import React from 'react';

function ChangePassword() {

    return (
        <div className="bg-gray-900 p-6 rounded">
            <h2 className="text-white text-xl font-bold">Change Password</h2>
            <div className="mt-6 mb-2 flex gap-2 w-full">
                <div>
                    <label htmlFor="old-password"
                        className="block mb-2 text-sm font-medium text-white">
                        Old Password
                    </label>
                    <input type="text" id="old-password"
                        className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                        placeholder="Enter Old Password" />
                </div>
                <div>
                    <label htmlFor="new-password"
                        className="block mb-2 text-sm font-medium text-white">
                        New Password
                    </label>
                    <input type="text" id="new-password"
                        className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                        placeholder="Enter New Password" />
                </div>

            </div>

            <button
                    type="submit"
                    className="block
                    bg-black
                    mt-4
                    text-white py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
                    Change Password
                </button>

        </div>
    );
}

export default ChangePassword;

