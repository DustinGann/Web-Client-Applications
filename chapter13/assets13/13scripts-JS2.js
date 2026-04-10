"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt(dateParts[0]);

    if (month < 1 || month > 12) { return false; }

    // only check day if there are 3 parts (MM/DD/YYYY)
    if (dateParts.length === 3) {
        const day = parseInt(dateParts[1]);
        if (day > 31) { return false; }
    }

    return true;
};

$( document ).ready( () => {

    $( "#save" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();
        const Credit = $("#card").val();
        const Expire = $("#cc_date").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;

        const CreditPatters = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

        const ExpirePatters  = /^[01]?\d\/\d{4}$/;             // MM/YYYY
        const ExpirePatters2 = /^[01]?\d\/[0-3]\d\/\d{4}$/; 
        

        
        // check user entries for validity
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }

        if ( Credit === "" || !CreditPatters.test(Credit) ) {
            isValid = false;
            $("#card").next().text(" Please enter a credit card number in NNNN-NNNN-NNNN-NNNN format.");
        }

        

        if ( Expire === "" || (!ExpirePatters.test(Expire) && !ExpirePatters2.test(Expire)) ) {
    isValid = false;
    $("#cc_date").next().text(" Please enter a valid date in MM/YYYY or MM/DD/YYYY format.");
} else {
    const temp = isDate(Expire, ExpirePatters) || isDate(Expire, ExpirePatters2);
    if (temp == false) {
        isValid = false;
        $("#cc_date").next().text(" Please enter a valid date in MM/YYYY or MM/DD/YYYY format.");
    }
}
        

        




        if ( dob === "" || !isDate(dob, datePattern) ) {
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }



        
        if ( isValid ) { 
            // code that saves profile info goes here
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});