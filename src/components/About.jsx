import{useContext} from 'react';
import {AppContext} from '../AppProvider'
export const About=()=>{
    const {theme}=useContext(AppContext);
    return <p>Theme:{theme}.This is about.</p>
}