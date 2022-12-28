import React, { Component } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='flex flex-row'>
                <p className='text-xl  hover:scale-110 duration-100 ml-2 my-2'>Calculator</p>
                
            </div>    
        );
    }
}
 
export default Header;