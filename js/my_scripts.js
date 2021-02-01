
function toggleNav() {
    if (document.getElementById("sidebar").style.width != "400px") {
        document.getElementById("sidebar").style.visibility = "visible";
        document.getElementById("sidebar").style.width = "400px";
    } else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("sidebar").style.visibility = "hidden";
    }
}
