
import React from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface Props {
    children: React.ReactNode
}

const Modal:React.FC<Props> = (props: Props) => {
    let modalContent = (
        <div className="modal-wrapper">
            {
                props.children
            }
        </div>
    )

    return ReactDOM.createPortal(modalContent, modalRoot!);
}

export default Modal
