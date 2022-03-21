 // compares text entered in field to the standard email address template needed.
 function validateEmail(email) {

    //    The two forward-slashes "/.../" contains a regexe. Notes about syntax at bottom of script
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}
// Captures info typed into email form and runs an "if else" statement to display if it is in the correct format or not.
function validate() {
    let result = $("#result");
    let email = $("#email").val();
    result.text("");
    if (validateEmail(email)) {
        result.text(email + " is valid");
        result.css("color", "green");
    } else {
        result.text(email + " is not a valid email address");
        result.css("color", "red");
    }
    return false;
}
$("#validate").on("click", validate);