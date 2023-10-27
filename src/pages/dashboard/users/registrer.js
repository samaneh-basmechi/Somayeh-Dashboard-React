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


const Register = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const openRegister = () => {
        setOpenRegisterModal(true);
    };

    const closeRegister = () => {
        setOpenRegisterModal(false);
    };

    const [items, setItems] = useState([
        { id: 1, text: 'Function one', checked: false },
        { id: 2, text: 'Function two', checked: false },
        { id: 3, text: 'Function three', checked: false },
        { id: 3, text: 'Function four', checked: false },
    ]);

    const handleCheckboxChange = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <>
            <button
                onClick={openRegister}
                type="button"
                className="block
                    bg-black
                    text-white py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
                +
                Register new user
            </button>
            <Modal
                isOpen={openRegisterModal}
                onRequestClose={closeRegister}
                style={customStyles}
                contentLabel="Example Modal">
                <div className="bg-gray-900 p-2 rounded-lg">
                    <h2 className="text-white text-2xl font-bold">Register</h2>
                    <div className="flex gap-4 mt-4">
                        <div>
                            <label htmlFor="FirstName"
                                className="block mb-2 text-sm font-medium text-white">
                                FirstName
                            </label>
                            <input type="text" id="FirstName"
                                className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                                placeholder="Enter firstName" />
                        </div>

                        <div>
                            <label htmlFor="LastName"
                                className="block mb-2 text-sm font-medium text-white">
                                LastName
                            </label>
                            <input type="text" id="LastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                                placeholder="Enter LastName" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <label htmlFor="Username"
                                className="block mb-2 text-sm font-medium text-white">
                                Username
                            </label>
                            <input type="text" id="Username"
                                className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                                placeholder="Enter Username" />
                        </div>

                        <div>
                            <label htmlFor="Email"
                                className="block mb-2 text-sm font-medium text-white">
                                Email
                            </label>
                            <input type="text" id="Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                                placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div>
                            <label htmlFor="Password"
                                className="block mb-2 text-sm font-medium text-white">
                                Password
                            </label>
                            <input type="text" id="Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                                placeholder="Enter Password" />
                        </div>

                        <div>
                            <label htmlFor="Confirm-Password"
                                className="block mb-2 text-sm font-medium text-white">
                                Confirm Password
                            </label>
                            <input type="text" id="Confirm-Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                                placeholder="Enter Confirm Password" />
                        </div>
                    </div>
                    <hr/>
                    <p className='mt-2 text-white text-md font-bold'>Permissions</p>
                    <ul className="mt-2 mb-6">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center mb-2 text-white">
                                <input
                                    type="checkbox"
                                    id={`item-${item.id}`}
                                    checked={item.checked}
                                    onChange={() => handleCheckboxChange(item.id)}
                                    className="mr-2 text-blue-400" />
                                <label
                                    htmlFor={`item-${item.id}`}
                                    className={item.checked ? 'line-through' : ''}>
                                    {item.text}
                                </label>
                            </li>
                        ))}
                    </ul>
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
                        Register
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Register;
