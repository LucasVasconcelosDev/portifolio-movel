import React from "react";
import WebModal from "../utils/webmodal";
import "../styles/components/appButton.css";

const AppButton = ({ data }) => {
    const { image, url, text } = data;

    const handleClick = () => {
        // Se o URL for um e-mail (possuir @), cria um link mailto. Se não, chama o WebModal
        if (url.includes("@")) {
            window.location.href = `mailto:${url}`;
        } else {
            WebModal(url);
        }
    };

    return (
        <div className="app-button-container">
            <button
                onClick={handleClick}
                className="app-button"
                style={{ backgroundImage: `url(${image})` }}
            />
            <span className="app-button-text">{text}</span>
        </div>
    );
};

export default AppButton;
