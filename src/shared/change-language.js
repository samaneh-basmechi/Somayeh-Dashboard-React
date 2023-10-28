import enFlag from '../assets/images/EN.png';
import deFlag from '../assets/images/DE.png';
import { useRef, useState, useEffect } from 'react';
import { useAppContext } from '../contex/app/app-context';

const ChangeLanguage = () => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    const { language, changeLanguage } = useAppContext();

    useEffect(() => {
        const checkIfClickOutside = e => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener('mousedown', checkIfClickOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickOutside)
        }
    }, [show]);



    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setShow(true)}
                type="button"
                id="menu-button">
                <img className='w-10' src={language === 'en' ? enFlag : deFlag} alt='English' />
            </button>

            <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${!show ? 'hidden' : undefined}`}
                ref={ref}
                role="menu" aria-orientation="vertical"
                aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1">
                    <a className="text-gray-700 block px-4 py-2 text-sm flex gap-3 cursor-pointer" onClick={() => changeLanguage('en')}
                        role="menuitem" tabIndex="-1" id="menu-item-0">
                        <img className='w-6' src={enFlag} alt='English' />
                        English
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm flex gap-3 cursor-pointer" onClick={() => changeLanguage('de')}
                        role="menuitem" tabIndex="-1" id="menu-item-1">
                        <img className='w-6' src={deFlag} alt='German' />
                        German
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ChangeLanguage;