function CreatePopUp() {
    const popUp = document.createElement("div");
    const popUpBackground = document.createElement("div");
    const popUpCard = document.createElement("div");
    
    function AppendChildControl() {
        document.body.appendChild(popUp);
        popUp.appendChild(popUpBackground);
        popUp.appendChild(popUpCard);
    }
    
    function StyleControl() {
        document.body.style.margin = "0px";
        popUp.style.position = "absolute";
        popUp.style.width = "100%";
        popUp.style.height = "100%";
    
        popUpBackground.style.width = "100%";
        popUpBackground.style.height = "100%";
        popUpBackground.style.backgroundColor = "grey";
        popUpBackground.style.position = "absolute";
    
        popUpCard.style.position = "absolute";
        popUpCard.style.top = "50%";
        popUpCard.style.left = "50%";
        popUpCard.style.transform = "translate(-50%,-50%)"
        popUpCard.style.width = "500px";
        popUpCard.style.height = "300px";
        popUpCard.style.background = "white";
        popUpCard.textContent = "POP - UP "
        popUpCard.style.textAlign = "center";
       
    }
    
    AppendChildControl();
    StyleControl();
    
}

CreatePopUp();