import React, { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function UserPage() {
    const context = useContext(ThemeContext)
    return (
        <div>
            <h3 className={context.themeColor}>UserPage</h3>
        </div>
    );
}
