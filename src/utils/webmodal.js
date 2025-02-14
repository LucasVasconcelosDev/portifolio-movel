const WebModal = (url) => {
    //esta função pega uma URL como parametro e abre uma nova janela
    //OBS: o navegador deve permitir pop-ups para que funcione corretamente
    const newWindow = window.open(
        url,
        "_blank",
        `width=${window.screen.width},height=${window.screen.height}`
    );

    if (newWindow) {
        newWindow.focus();
    } else {
        alert("Permita pop-ups para abrir a página.");
    }
};

export default WebModal;
