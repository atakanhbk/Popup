function CreatePopUp(appendParent) {
  const html = `<div class ="popUp">This is pop-up</div>`;
  const style = "width : 100%; height:100%; background-color:red; z-index:100" 

  const popUpElement = document.createElement("div");
  popUpElement.innerHTML = html;
  popUpElement.style.cssText = style;

  appendParent.appendChild(popUpElement);
  
}

CreatePopUp();
