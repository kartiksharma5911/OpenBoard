// identify -> click  -> again click
pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        // second click
        // options show 
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {

            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "pencil";
        tool.strokeStyle = "black";
    }
})
eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        // second click
        // options show 
        options[1].style.display = "flex";
    } else {
        // eraser.style.border = "1px solid red";
        // koi aur clicked aur usko options visible to wo remove ho jaaye 
        cTool = "eraser";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.strokeStyle = "white";
    }
})
rect.addEventListener("click", function (e) {
    if (cTool == "rect") {
        // second click
        // options show 
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "rect";
        tool.strokeStyle = "black";
    }
})
line.addEventListener("click", function (e) {
    if (cTool == "line") {
        // second click
        // options show 
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        // eraser.style.border = "1px solid red";
        cTool = "line";
        tool.strokeStyle = "black";
    }
})

tool.strokeStyle = "black";
let color = "black";
let redColor = document.querySelector(".red");
let yellowColor = document.querySelector(".yellow");
let blueColor = document.querySelector(".blue");
redColor.addEventListener("click", function () {
    if (color == "red") {
        color = "black";
        tool.strokeStyle = "black";
    } else {
        color = "red";
        tool.strokeStyle = "red";
    }
})
yellowColor.addEventListener("click", function () {
    if (color == "yellow") {
        color = "black";
        tool.strokeStyle = "black";
    } else {
        color = "yellow";
        tool.strokeStyle = "yellow";
    }
})
blueColor.addEventListener("click", function () {
    if (color == "blue") {
        color = "black";
        tool.strokeStyle = "black";
    } else {
        color = "blue";
        tool.strokeStyle = "blue";
    }
})



let PencilSize = 5;
//eraser
let EraserSize = 5;
//rectangle 
let RectangleSize = 5;
//line
let LineSize = 5;
//kispe hua hai click konsi div pe ye bhi event bubbling dekhti hai ,when an event occur at an element , then the event bubbles up to its parent element unless it doesnt encounter any eventListener  
/* This concept is known as Event Bubbling and this concept is very important, jb hume size box k sare size pe alag alag se sbpe event listener nhi lgana pda ,bas ekbar size box pe event listener lga hai , to is conceot ko boldege event bubbling*/
let sizeBoxArr = document.querySelectorAll(".size-box");//sbhi k size box select krne hai , pencil ,eraser,rectangle ,line
sizeBoxArr[0].addEventListener("click", function (e)//ek event hota tha maths me jisse hum x aur y coordinates lelete the 
{
    // console.log(e.target);//ye deta hai konse element pe click hua mtlb exact size no. //size box k andar konse size pe click hua exact
    // console.log(e.currentTarget);//current target mtlb event listener btayega us position pe konsa hai //sometimes target can also be equal to the current target iff the 
    // actual event occur -->target

    let elements = ["size1", "size2", "size3", "size4"];
    let AllTheClasses = e.target.classList;//ek element pe  //array me jitni b classes hai , un sb classes ki list milegi hume , eg --> size1 size , this is the list of class here 
    let firstClass = AllTheClasses[0];
    let test = elements.includes(firstClass);//ye check krke true ya false save krega test me 
    if (test)//agar test ki value true hui to hume   
    {
        if (firstClass == "size1") {
            PencilSize = 1;
        } else if (firstClass == "size2") {
            PencilSize = 4;
        }
        else if (firstClass == "size3") {
            PencilSize = 8;
        }
        else if (firstClass == "size4") {
            PencilSize = 10;
        }
        tool.lineWidth = PencilSize;
    }
    console.log("pencilsize" + PencilSize);
})
sizeBoxArr[1].addEventListener("click", function (e)//ek event hota tha maths me jisse hum x aur y coordinates lelete the 
{
    // console.log(e.target);//ye deta hai konse element pe click hua mtlb exact size no. //size box k andar konse size pe click hua exact
    // console.log(e.currentTarget);//current target mtlb event listener btayega us position pe konsa hai //sometimes target can also be equal to the current target iff the 
    // actual event occur -->target

    let elements = ["size1", "size2", "size3", "size4"];
    let AllTheClasses = e.target.classList;//ek element pe  //array me jitni b classes hai , un sb classes ki list milegi hume , eg --> size1 size , this is the list of class here 
    let firstClass = AllTheClasses[0];
    let test = elements.includes(firstClass);//ye check krke true ya false save krega test me 
    if (test)//agar test ki value true hui to hume   
    {
        if (firstClass == "size1") {
            EraserSize = 4;
        } else if (firstClass == "size2") {
            EraserSize = 8;
        }
        else if (firstClass == "size3") {
            EraserSize = 13;
        }
        else if (firstClass == "size4") {
            EraserSize = 20;
        }
        tool.lineWidth = EraserSize;
    }

})
sizeBoxArr[2].addEventListener("click", function (e)//ek event hota tha maths me jisse hum x aur y coordinates lelete the 
{
    // console.log(e.target);//ye deta hai konse element pe click hua mtlb exact size no. //size box k andar konse size pe click hua exact
    // console.log(e.currentTarget);//current target mtlb event listener btayega us position pe konsa hai //sometimes target can also be equal to the current target iff the 
    // actual event occur -->target

    let elements = ["size1", "size2", "size3", "size4"];
    let AllTheClasses = e.target.classList;//ek element pe  //array me jitni b classes hai , un sb classes ki list milegi hume , eg --> size1 size , this is the list of class here 
    let firstClass = AllTheClasses[0];
    let test = elements.includes(firstClass);//ye check krke true ya false save krega test me 
    if (test)//agar test ki value true hui to hume   
    {
        if (firstClass == "size1") {
            RectangleSize = 3;
        } else if (firstClass == "size2") {
            RectangleSize = 7;
        }
        else if (firstClass == "size3") {
            RectangleSize = 10;
        }
        else if (firstClass == "size4") {
            RectangleSize = 13;
        }
        tool.lineWidth = RectangleSize;
    }

})
sizeBoxArr[3].addEventListener("click", function (e)//ek event hota tha maths me jisse hum x aur y coordinates lelete the 
{
    // console.log(e.target);//ye deta hai konse element pe click hua mtlb exact size no. //size box k andar konse size pe click hua exact
    // console.log(e.currentTarget);//current target mtlb event listener btayega us position pe konsa hai //sometimes target can also be equal to the current target iff the 
    // actual event occur -->target

    let elements = ["size1", "size2", "size3", "size4"];
    let AllTheClasses = e.target.classList;//ek element pe  //array me jitni b classes hai , un sb classes ki list milegi hume , eg --> size1 size , this is the list of class here 
    let firstClass = AllTheClasses[0];
    let test = elements.includes(firstClass);//ye check krke true ya false save krega test me 
    if (test)//agar test ki value true hui to hume   
    {
        if (firstClass == "size1") {
            LineSize = 4;
        } else if (firstClass == "size2") {
            LineSize = 6;
        }
        else if (firstClass == "size3") {
            LineSize = 9;
        }
        else if (firstClass == "size4") {
            LineSize = 12;
        }
        tool.lineWidth = LineSize;
    }

})