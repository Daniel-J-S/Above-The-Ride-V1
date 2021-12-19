import React from 'react';


const Burger = ({ navOpen, setNavOpen }) => {
    return (
        <button 
            className="burger ml-auto mr-3" 
            onClick={() => setNavOpen(!navOpen)}
            >
            <div 
                style={{
                    transform: navOpen ? 'rotate(45deg)' : 'rotate(0)'
                }} 
            />
            <div 
                style={{
                    transform: navOpen ? 'translateX(20px)' : 'translateX(0)',
                    opacity: navOpen ? 0 : 1
                }} 
            />
            <div 
                style={{
                    transform: navOpen ? 'rotate(-45deg)' : 'rotate(0)'
                }} 
                />
        </button>
    )
};

export default Burger;