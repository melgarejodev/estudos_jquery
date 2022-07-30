$(function(){

    var imgStyleReset = new Array();

    // Hide
    $("#btnHide").click(() => {
        console.log("hide");
        var t = $(document).getTime();
        $($(document).getTarget()).hide(t);
    });

    // Show
    $("#btnShow").click(() => {
        console.log("show");
        var t = $(document).getTime();
        $($(document).getTarget()).show(t);
    });

    // Toggle
    $("#btnToggle").click(() => {
        console.log("toggle");
        var t = $(document).getTime();
        $($(document).getTarget()).toggle(t);
    });

    // Slide
    $("#btnSlide").click(() => {
        var t = $(document).getTime();
        var opt = $("#optSlide").val();
        switch (opt) {
            case "u":
                console.log("slideUp");
                $($(document).getTarget()).slideUp(t);
                break;
            case "d":
                console.log("slideDown");
                $($(document).getTarget()).slideDown(t);
                break;
            case "t":
                console.log("slideToggle");
                $($(document).getTarget()).slideToggle(t);
                break;
            default:
                console.log("Não executado - opção: " + opt);
        }
    });

    // Fade
    $("#btnFade").click(() => {
        var t = $(document).getTime();
        var opt = $("#optFade").val();
        switch (opt) {
            case "i":
                console.log("fadeIn");
                $($(document).getTarget()).fadeIn(t);
                break;
            case "o":
                console.log("fadeOut");
                $($(document).getTarget()).fadeOut(t);
                break;
            case "t":
                console.log("fadeToggle");
                $($(document).getTarget()).fadeToggle(t);
                break;
            case "2":
                console.log("fadeTo");
                var tr = $(document).getTransparencia();
                $($(document).getTarget()).fadeTo(t, tr);
                break;
            default:
                console.log("Não executado - opção: " + opt);
        }
    });

    // Opções exclusivas para imagens
    $("#optTarget").change(()=>{
        if($("#optTarget").val() == "img") {
            $("#divOpcoesImagens").show();
            // Quando passar pela opção de imagens, guarda valores para reset
            if(imgStyleReset.length === 0) {
                console.log("Capturando reset data");
                var i = 0;
                $("#divImagens").children("img").each(() =>{
                    imgStyleReset[i] = $("#divImagens").children("img").get(i).style.cssText;
                    i++;
                });
            }
        } else {
            $("#divOpcoesImagens").hide();
        }
    });

    // Animar as imagens
    $("#btnAnimarImagem").click(() =>{
        console.log("animate");
        $("img").animate({height: $("#inAltura").val(), width: $("#inLargura").val(), margin: $("#inMargem").val() }, $(document).getTime());
    });

    // Reset das imagens (dados salvos em optTarget.change)
    $("#btnResetImagem").click(() =>{
        console.log("reset");
        var i = 0;
        $("#divImagens").children("img").each(() => {
            $("#divImagens").children("img").get(i).setAttribute('style', imgStyleReset[i]);
            i++;
        });
    });

    jQuery.fn.getTime = function(){
        return $("#inTime").val() > 0 ? $("#inTime").val() * 1000 : 0;
    };

    jQuery.fn.getTransparencia = function() {
        return $("#inTransparencia").val() < 0 ? 0 : $("#inTransparencia").val() > 1 ? 1 : $("#inTransparencia").val();
    }
    
    jQuery.fn.getTarget = function(){
        return $("#optTarget").val();
    };
});