// Import libraries
import React from 'react';

// Import components

// Styles

// Interface
interface IProps {

}

// Component
const Layout: React.FC<IProps> = ({children}) => {
    return (
        <>
            <header>
                Header here

            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
}


export default Layout;
