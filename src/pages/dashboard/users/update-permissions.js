import React, {useState} from 'react';
import Modal from 'react-modal';
import CUSTOM_STYLE from './modal-style';
import {useForm} from 'react-hook-form';
import {httpService} from '../../../core/http-service';
import {Form, useNavigation, useRouteError} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {toast, ToastContainer} from "react-toastify";
import {NOTIFY_CONFIG} from "../../../shared/notif";
import 'react-toastify/dist/ReactToastify.css';

function UpdatePermissions(props) {

    const [items, setItems] = useState([
        {name: 'f1Access', text: 'FunctionOne', checked: false},
        {name: 'f2Access', text: 'FunctionTwo', checked: false},
        {name: 'f3Access', text: 'FunctionThree', checked: false},
        {name: 'f4Access', text: 'FunctionFour', checked: false},
    ]);

    const {t} = useTranslation();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        const payload = Object.assign({isAdmin: false, ...data});

        httpService.patch(`/users/${props.userData.id}/permissions`, payload)
            .then(response => {
                    const message = t('message.successChangePermissions');
                    toast.success(message, {
                        ...NOTIFY_CONFIG
                    });
                    props.getUser();
                    props.closeUpdatePermission();
                }
            ).catch(error => {

            const message = error?.message || t('message.apiError');
            toast.error(message, {
                ...NOTIFY_CONFIG
            });
        });
    };

    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const routeErrors = useRouteError();

    const handleCheckboxChange = (itemName) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === itemName ? {...item, checked: !item.checked} : item
            )
        );
    };

    return (
        <>
            <ToastContainer/>
            <Modal
                isOpen={props.openUpdatePermissionModal}
                onRequestClose={props.closeUpdatePermission}
                style={CUSTOM_STYLE}
                contentLabel="Example Modal">
                <Form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 p-2 rounded-lg">
                    <h2 className="text-white text-2xl">
                        {t('dashboard.user.permissions.title')}
                    </h2>
                    <ul className="mt-6 mb-6">
                        {props.userData.f1Access}
                        {items.map((item) => (
                            <li
                                key={item.name}
                                className="flex items-center mb-2 text-white">
                                <input
                                    {...register(item.name)}
                                    type="checkbox"
                                    id={`item-${item.name}`}
                                    defaultChecked={props.userData[item.name]}
                                    onChange={() => handleCheckboxChange(item.name)}
                                    className="mr-2 text-blue-400"/>
                                <label
                                    htmlFor={`item-${item.name}`}>
                                    {t(`dashboard.user.permissions.items.${item.text}`)}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block
                    bg-black
                    w-full
                    text-white py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
                        {t('dashboard.user.permissions.submit')}
                        {isSubmitting ? t('dashboard.user.register.modal.submitting') : t('dashboard.user.register.modal.submit')}
                    </button>
                    {
                        routeErrors?.response?.data?.length > 0 && (
                            routeErrors.response.data.map((error) => {
                                return <p>{error.description}</p>;
                            })
                        )
                    }
                </Form>
            </Modal>
        </>

    );
}

export default UpdatePermissions;
