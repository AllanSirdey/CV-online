jQuery(function () {
    var kKeys = [];

    function Kpress(e) {
        kKeys.push(e.keyCode);
        if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
            jQuery(this).unbind('keydown', Kpress);
            kExec();
        }
    }
    jQuery(document).keydown(Kpress);
});

function kExec() {
    document.location.href = "js/mario/mario.html"
}