"use strict";

const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};


const getDate =() =>{

 const now = new Date();
 
    const isoString = now.toISOString();


    const year  = isoString.substring(0, 4);   
    const month = isoString.substring(5, 7);   
    const day   = isoString.substring(8, 10); 
    const hours = isoString.substring(11, 13); 
    const mins  = isoString.substring(14, 16);

    return `${month}/${day}/${year} at ${hours}:${mins}`;
}





const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
       
        if (futureValue==Infinity){
            //alert("futureValue=Infinity &  i="+ i );

        }
    }
  
   // futureValue = formatFutureValue(futureValue);
   futureValue = new Intl.NumberFormat("en-US").format(futureValue);

   

    return futureValue;
};

const formatFutureValue = (futureValue) => {

    let futureR = futureValue.toFixed(2);
    let futRS = futureR.toString();

    let gg = String(futureValue).indexOf(".");
    ////////////////////////////////////////////////////////
    /*
    let d = String(futureValue).substring(gg-3, gg+3);

    let e = String(futureValue).substring(-6, gg-3);

    let f = String(futRS).substring(0, gg-6);
    */
    /////
    let Conawnser = "";
    Conawnser += "$";

    if (futRS.length > 9)  {

    Conawnser += futRS.substring(0, gg-6);
    Conawnser += "," ;

    }

    Conawnser += futRS.substring(gg-6, gg-3) ;
    Conawnser += "," ;
    Conawnser += futRS.substring(gg-3, gg+3);
   

   
    
    alert(Conawnser);

    return Conawnser;

}


$(document).ready( () => {
    $("#calculate").click( () => {
        /*
        const investment = parseFloat($("#investment").val());
        const rate = parseFloat($("#rate").val());
        const years = parseFloat($("#years").val());   */

        const investment = getRandomNumber(50000);
        const rate = getRandomNumber(15);
        const years = getRandomNumber(50);   

       

       

      


        let isValid = true;
        if (isNaN(investment) || investment <= 0) {
            $("#investment").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#investment").next().text("");
        }

        if (isNaN(rate) || rate <= 0) {
            $("#rate").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#rate").next().text("");
        }

        if (isNaN(years) || years <= 0) {
            $("#years").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#years").next().text("");
        }

        if (isValid) {
            $("#future_value").val(calculateFutureValue(investment, rate, years));
        }
    });
    $("#investment").focus();


    $("#date").text(getDate());
});