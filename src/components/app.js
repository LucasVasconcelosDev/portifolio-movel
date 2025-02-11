import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Evita avisos de acessibilidade no React

// este componente é promissor utilizando iframe para abrir sites externos dentro do meu
// Mas alguns sites essenciais bloqueiam a utilização do iframe

const AppModal = ({ url, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={modalStyles}
            contentLabel="Abrir Link"
        >
            <button onClick={onClose} style={modalStyles.closeButton}>Fechar</button>
            <iframe
                src={url}
                title="Conteúdo Externo"
                style={modalStyles.iframe}
            />
        </Modal>
    );
};

const modalStyles = {
    content: {
        width: "80%",
        height: "80%",
        margin: "auto",
        borderRadius: "10px",
        padding: "15px",
        backgroundColor: "#fff",
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10,
        padding: "5px 10px",
        cursor: "pointer",
        backgroundColor: "#ff4d4d",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
    },
    iframe: {
        width: "100%",
        height: "90%",
        border: "none",
    },
};

export default AppModal;
