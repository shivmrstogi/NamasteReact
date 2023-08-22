import { LOGO_URL } from "../utils/constants";

const HeaderComponent =() => {

    return    (
        <div className="header">
            <div className='logo'>
                <img src={LOGO_URL}/>
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

export default HeaderComponent;