import React from 'react';
import  ReactDOM  from 'react-dom/client';

const HeaderComponent =() => {

    return    (
        <div className="header">
            <div className='logo'>
                <img src='https://png.pngtree.com/png-clipart/20201216/original/pngtree-grocery-logo-with-shopping-bag-and-food-png-image_5714803.jpg'/>
            </div>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>    
            </div>
        </div>
)}

const SearchComponent = () =>{

    return (
        <div className='search'>
            <div className='seach-box'>
                <input type='text'/>
            </div>
        </div>
    ) 
}


const AppComponent = ()=>{
    return (
        <>
            <HeaderComponent/>
            <SearchComponent/>
        </>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);