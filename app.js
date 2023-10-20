const popupContainer = document.createElement("div");
popupContainer.innerHTML = `
    <div class="popup-container">
        <div class="popup-background">
            <div class="popup-card">This place is Popup</div>
        </div>
    </div>
`;

const style = `
    * {
        margin: 0;
        padding: 0;
    }

    .popup-container, .popup-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999999;
    }

    .popup-background {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .popup-card {
        position: absolute;
        width: 50%;
        height: 40%;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

// Create a <style> element and set its content
const styleElement = document.createElement("style");
styleElement.innerHTML = style;

// Append the style to the <head>
document.head.appendChild(styleElement);

// Append the popup container to the document body
document.body.appendChild(popupContainer);
