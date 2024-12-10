let buttonState = false;
const button = document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6")
button.forEach(element => {
    element.onclick = () => {
        buttonState = !buttonState;
        console.log(button)
        if(buttonState){
            element.style.filter = "blur(7px)"
        }
        else{
            element.style.filter = "none"
        }
    }
    }
)