import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./app.reducer";
import i18n from "../../core/i18n";

const AppContext = createContext();
const initialState = {
    language: localStorage.getItem('language') || 'de'
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const changeLanguage = (language) => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
    }

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
    }, state.language);

    return <AppContext.Provider value={{ ...state, changeLanguage }}>
        {children}
    </AppContext.Provider>

}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider } 
