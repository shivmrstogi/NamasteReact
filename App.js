import React from 'react';
import  ReactDOM  from 'react-dom/client';
import HeaderComponent from './src/components/Header';
import RestrauntComponent from './src/components/Restraunt';


// const SearchComponent = () =>{
//     return (
//         <div className='search'>
//             <div className='search-box'>
//                 <input type='text'/>
//             </div>
//         </div>
//     ) 
// }

const AppComponent = ()=>{
    return (
        <>
            <HeaderComponent/>
            <RestrauntComponent/>
        </>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);