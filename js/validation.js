$("#formValidation").validate({
   rules:{
    email:{
        email: true,
        emailExt: true,
        minlength: 7
    },
    password: {
        required: true,
        pwcheck: true,
        minlength: 8
    },
    psw_repeat: {
        required: true,
        equalTo: "#password"
    },
   },
   messages:{
    email:{
        required: "Your Email format is not correct, please re-enter.Please enter your name",
        minlength: "Email cannot be left blank",
    },
    password: {
        required: "Specify password",
        pwcheck: "The password does not match the criteria!",
        minlength: "The password does not meet the criteria!"
    },
   },
    submitHandler: function(form) {
      form.submit();
    },
});
$.validator.addMethod("pwcheck",
    function(value, element) {
    return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value);
});
jQuery.validator.addMethod("emailExt", function(value, element, param) {
    return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
},'Your E-mail is wrong');