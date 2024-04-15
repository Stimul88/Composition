import React from "react";
import './modal.css'

interface ModalProps {
    children?: React.ReactNode;
    title: string;
    text: string;
}
export const Modal = ({ title, text, children }: ModalProps) => {

    return (
        <div className="card">
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};
