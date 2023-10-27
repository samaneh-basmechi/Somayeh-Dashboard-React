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


function SetPermission(props) {
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
        <Modal
            isOpen={props.openSetPermissionModal}
            onRequestClose={props.closeSetPermission}
            style={customStyles}
            contentLabel="Example Modal">
            <div className="bg-gray-900 p-2 rounded-lg">
                <h2 className="text-white text-2xl">List with Permissions</h2>
                <ul className="mt-6 mb-6">
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
                    Change permissions
                </button>
            </div>
        </Modal>
    );
}


export default SetPermission;
