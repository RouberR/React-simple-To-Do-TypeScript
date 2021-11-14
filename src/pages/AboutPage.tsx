import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: FC = () => {
    return (
        <div>
            <h1>Страница информации:</h1>
            <p>React, TypeScript, UI materializecss, React-router-dom</p>
            <Link to="/"><button className="btn">Обратно к списку дел</button></Link>
        </div>
    )
}
