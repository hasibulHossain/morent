import React, { FC } from 'react';
import classnames from 'classnames';

interface Props {
    classes?: string,
    onClick: () => void,
    padding?: string,
    fontSize?: string,
    textColor?: string,
    children: React.ReactNode,
}

const TextButton:FC<Props> = (props: Props) => {
    const {classes, onClick, textColor = 'text-white', padding = 'px-4 py-3', fontSize = 'text-xs'} = props;

    const combinedClasses = classnames('capitalize text-center font-medium rounded-md focus:outline-none', classes, padding, textColor, fontSize);

    return (
        <button onClick={onClick} className={combinedClasses}>
            {props.children}
        </button>
    )
}

export default TextButton