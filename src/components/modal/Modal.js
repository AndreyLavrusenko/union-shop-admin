import React from "react";
import ReactDOM from "react-dom";

import ClassicModal from "./modalWindow/ClassicModal";

import './modal.scss'


const Modal = ({active, setModalActive, activeId, deleteProduct}) => {

    return ReactDOM.createPortal(
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setModalActive(false)}
        >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <div
                        className="modal__header-close"
                        onClick={() => setModalActive(false)}
                    />
                </div>
                <ClassicModal deleteProduct={deleteProduct} activeId={activeId} />
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;