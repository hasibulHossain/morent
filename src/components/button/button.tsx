import React, { FC } from 'react';
import classnames from 'classnames';

interface Props {
    classes?: string,
    onClick: () => void,
    padding?: string,
    fontSize?: string,
    children: React.ReactNode,
    bgColor?: string,
}

const Button:FC<Props> = (props: Props) => {
    const {classes, onClick, padding = 'px-4 py-3', bgColor = 'bg-primaryblue', fontSize = 'text-xs lg:text-base'} = props;

    const combinedClasses = classnames('capitalize text-center font-medium text-white rounded-md hover:bg-blue-800 focus:outline-none', bgColor, classes, padding, fontSize)

    return (
        <button onClick={onClick} className={combinedClasses}>
            {props.children}
        </button>
    )
}

export default Button