const popupContainer = document.createElement("div");
popupContainer.innerHTML = `
    <div class="popup-container">
        <div class="popup-background">
           <form>
                    <div class="popup-card">
                        
                        <div class="left-card">
                            <img src="https://cdn.webrazzi.com/uploads/2020/07/insider-yatirim-343.png" alt="Description of the image">
                        </div>

                        <div class="right-card">
                            <h1>Title</h1>
                            <h3>Short Text</h3> 
                            <div class="input-part">
                                <input type="email" name="email" id="email" class = "input-email" placeholder="Email">
                                <input type="tel" name="phone" id="phone" class = "input-phone"  placeholder="Phone Number">
                                <button>BE FIRST</button>
                                <div class="input-agreement">
                                    <input type="checkbox">
                                    <h3>Agreement</h3>
                                </div>
                            </div>
                        </div>
                   </div>
           </form>
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
        width: 80%;
        height: 60%;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-card,.right-card{
        position:absolute;
        width:50%;
        height:100%;
    }

    .left-card{
        left:0;
    }

    .right-card{
        right:0;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        gap:10px;
    }

    .input-part{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        gap:10px;
        width:70%;
    }

    .input-email,.input-phone,button{
        width:100%;
        border:1px solid black;
        border-radius:5px;
        height:30px;
        padding:5px;
    
        box-sizing: border-box;
    }


    .input-agreement{
        display:flex;
        justify-content: center;
        align-items: center;
        gap:15px;
    }


    img{
       width:100%;
       height:100%;
    }
`;

// Create a <style> element and set its content
const styleElement = document.createElement("style");
styleElement.innerHTML = style;


// Append the style to the <head>
document.head.appendChild(styleElement);

// Append the popup container to the document body
document.body.appendChild(popupContainer);
