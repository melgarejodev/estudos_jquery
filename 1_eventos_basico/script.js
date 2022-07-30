$(function(){

    // 1st and last
    $("button").hover(
        () => { console.log("Entrando no objeto"); },
        () => { console.log("Saindo do objeto"); }
    );
    
    // 1
    $("button").mousedown((variavel) => {
        console.log("Mouse Down: " + variavel.target.id);
    });
    
    // 2
    $("button").mouseup((variavel) => {
        console.log("Mouse Up: " + variavel.target.id);
    });
    
    // 3
    $("button").click((variavel) => {
        console.log("Click: " + variavel.target.id);
    });

    // Exibindo códigos ASCII
    $("input").keydown((evento) => {
        console.log(String.fromCharCode(evento.which) + " = " + evento.which);
    });

    //
    $("#chk").click(() => {
        // let inputPsw = $("input")[0];
        let inputPsw = $("#psw")[0];
        inputPsw.type = inputPsw.type == "text" ? inputPsw.type = "password" : inputPsw.type == "text";
    });

    //
    $("#btnPlaceHolder").click((eventao) => {
        let inputText = $("#psw")[0];
        console.log(inputText.value);
        inputText.placeholder = inputText.value;
    });

    // Botao tipo input
    $("#btnClear").click((evento) => {
        console.log("Before clear: " + $("#psw").val());
        $("#psw").val("");
        console.log("After clear: " + $("#psw").val());
    });
})
