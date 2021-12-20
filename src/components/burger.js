import React from 'react';


const Burger = ({ navOpen, setNavOpen, isPastTop }) => {
    return (
        <button 
            className="burger" 
            onClick={() => setNavOpen(!navOpen)}
            >
            <div 
                style={{
                    backgroundColor: isPastTop ? '#000': '#fff',
                    margin: navOpen ? 0 : '.35rem',
                    transform: navOpen ? 'rotate(45deg)' : 'rotate(0)',
                }} 
            />
            <div 
                style={{
                    backgroundColor: isPastTop ? '#000': '#fff',
                    margin: navOpen ? 0 : '.35rem',
                    transform: navOpen ? 'translateX(20px)' : 'translateX(0)',
                    opacity: navOpen ? 0 : 1
                }} 
            />
            <div 
                style={{
                    backgroundColor: isPastTop ? '#000': '#fff',
                    margin: navOpen ? 0 : '.35rem',
                    transform: navOpen ? 'rotate(-45deg)' : 'rotate(0)',
                }} 
                />
        </button>
    )
};

export default Burger;