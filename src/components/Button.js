import React from 'react';
import { useHistory } from 'react-router-dom';

const Button = () => {
    const history = useHistory();
    const handleClick = () => history.push('/boards');

    return (
        <button type="button" style={{width : "100px", height: "30px"}} onClick={handleClick}>
            Go To Boards
        </button>
    );
};

export default Button;