import React from "react";

const WebModal = ({ url, onClose }) => {
    const openPopup = () => {
        const newWindow = window.open(url, "_blank", "width=800,height=600");
        if (newWindow) {
            newWindow.focus();
        } else {
            alert("Permita pop-ups para abrir a página.");
        }
        onClose(); // Fecha o modal após abrir a nova janela
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Abrir Página Externa</h2>
                <p>O site será aberto em uma nova janela.</p>
                <button onClick={openPopup}>Abrir</button>
                <button onClick={onClose} style={{ marginLeft: "10px" }}>Fechar</button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
    },
};

export default WebModal;
