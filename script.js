function generatepassword() {
    var lowercase = "qwertyuiopasdfghjklzxcvbnm";
    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var number = "1234567890";
    var all = "ASDFGHJKLZXCVBNMPOIUYTREWQasdfghjklqwertyuiop;'zxcvbnm,./1234567890!@#$%^&*()_";
    var password = "";
    var user = prompt("How many characters would you like?")
    if (user >= 0) {
        var requirelowercase = confirm("Press OK if You would like just lowercase");
        if (requirelowercase) {
            for (var i = 0; i < user; i++) {
                password = password + lowercase.charAt(Math.floor(Math.random() * Math.floor(lowercase.length - 1)));
            }
            document.getElementById("mainborder").value = password;
        } else {
            requireuppercase();
        }

        function requireuppercase() {
            var require = confirm("Press OK if You would like just uppercase");
            if (require) {
                for (var i = 0; i < user; i++) {
                    password = password + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length - 1)));
                }
                document.getElementById("mainborder").value = password;
            } else {
                requirenumber();
            }
        }
        function requirenumber() {
            var numberpass = confirm("Press OK if You would like just number");
            if (numberpass) {

                for (var i = 0; i < user; i++) {
                    password = password + number.charAt(Math.floor(Math.random() * Math.floor(number.length - 1)));
                }
                document.getElementById("mainborder").value = password;
            } else {

                allchracters();
            }
        }
        function allchracters() {
            for (var i = 0; i < user; i++) {
                password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));
            }
            document.getElementById("mainborder").value = password;
        }
    } else {
        alert("you have enter the number. Please Try again!");
    }
}
function copygenerate() {
    document.getElementById("mainborder").select();
    document.execCommand("copy");
}





