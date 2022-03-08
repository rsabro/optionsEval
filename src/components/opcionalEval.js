import React from "react";

export const ButtonTeste = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    return (
        <button
            onClick={onClick}
            type={type}>
                {children}
        </button>
    );
};