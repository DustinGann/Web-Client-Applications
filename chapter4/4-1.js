"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number`;
const getErrorMsg2 = lbl => `${lbl} must be a number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

/*
            <label for="miles">Miles Driven:</label>
            <input type="text" id="miles">
        </div>
        <div>
            <label for="gallons">Gallons of Gas Used:</label>
            <input type="text" id="gallons">
        </div>
        <div>
            <label for="mpg">Miles Per Gallon:</label>

*/ 



const clearEntries = () => {
$("#miles").value = "";
$("#gallons").value = "";
$("#mpg").value = "";

$("#miles").focus();

}


const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) ) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");

    } else if ( miles <= 0) {
        alert(getErrorMsg2("Miles driven"));
        focusAndSelect("#miles");


    } else if (isNaN(gallons) ) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");

        } else if ( gallons <= 0) {
        alert(getErrorMsg2("Gallons of gas used"));
        focusAndSelect("#gallons");



    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};



document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();

    $("#clear").addEventListener("click", clearEntries);

    $("#miles").addEventListener("dblclick", clearEntries);
});



