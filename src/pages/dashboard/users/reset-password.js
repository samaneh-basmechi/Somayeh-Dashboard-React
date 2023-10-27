import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgb(255 255 255 / 48%)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(17 24 39)',
        borderColor: 'rgb(17 24 39)',
    },
};


function ResetPassword(props) {

    return (
        <Modal
            isOpen={props.openResetPasswordModal}
            onRequestClose={props.closeResetPassword}
            style={customStyles}
            contentLabel="Example Modal">
            <div className="bg-gray-900 p-2 rounded-lg">
                <h2 className="text-white text-2xl">Reset Password</h2>
                <div className="w-[250px] mt-6 mb-6">
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
                        placeholder="Set New Password" />
                </div>
                <button
                    type="submit"
                    className="block
                    bg-black
                    w-full
                    text-white py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
                    Reset Password
                </button>
            </div>
        </Modal>
    );
}

export default ResetPassword;
