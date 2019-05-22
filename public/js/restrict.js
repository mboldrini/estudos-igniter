$(function(){

    $("#btn_add_course").click(function(){
        clearErrors();
        $("#form_course")[0].reset();///Limpa todos os campos do form
        $("#course_img_path").attr("src","");
        $("#modal_course").modal();
    });

    $("#btn_add_member").click(function (){
        clearErrors();
        $("#form_member")[0].reset();///Limpa todos os campos do form
        $("#member_photo_path").attr("src", "");
        $("#modal_member").modal();
    });

    $("#btn_add_user").click(function (){
        clearErrors();
        $("#form_user")[0].reset();///Limpa todos os campos do form
        $("#modal_user").modal();
    });

    $("#btn_upload_course_img").change(function () {
        uploadImg($(this), $("#course_img_path"), $("#course_img"));
    });

    $("#btn_upload_member_photo").change(function () {
        uploadImg($(this), $("#member_photo_path"), $("#member_photo"));
    });


    $("#form_course").submit(function () {

        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_save_course",
            dataType: "json",
            data: $(this).serialize(),
            beforeSend: function () {
                clearErrors();
                $("#btn_save_course").siblings(".help-block").html(loadingImg("Verificando..."));
            },
            success: function (response) {
                clearErrors();
                if (response["status"]) {
                    $("#modal_course").modal("hide");
                } else {
                    showErrorsModal(response["error_list"])
                }
            }
        })

        return false;
    });

    $("#form_member").submit(function () {

        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_save_member",
            dataType: "json",
            data: $(this).serialize(),
            beforeSend: function () {
                clearErrors();
                $("#btn_save_member").siblings(".help-block").html(loadingImg("Verificando..."));
            },
            success: function (response) {
                clearErrors();
                if (response["status"]) {
                    $("#modal_member").modal("hide");
                } else {
                    showErrorsModal(response["error_list"])
                }
            }
        })

        return false;
    });

    $("#form_user").submit(function() {

        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_save_user",
            dataType: "json",
            data: $(this).serialize(),
            beforeSend: function() {
                clearErrors();
                $("#btn_save_user").siblings(".help-block").html(loadingImg("Verificando..."));
            },
            success: function(response) {
                clearErrors();
                if (response["status"]) {
                    $("#modal_user").modal("hide");
                } else {
                    showErrorsModal(response["error_list"])
                }
            }
        })

        return false;
    });


    $("#btn_your_user").click(function () {

        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_get_user_data",
            dataType: "json",
            data: { "user_id": $(this).attr("user_id") },
            success: function (response) {
                clearErrors();
                $("#form_user")[0].reset();
                $.each(response["input"], function (id, value) {
                    $("#" + id).val(value);
                });
                $("#modal_user").modal();
            }
        })

        return false;
    });

    console.log("loading?");

    var dt_course = $("#dt_courses").DataTable({
        "autoWidth": false,
        "processing": true, /// mostra a tela processando ao pesquisar no db
        "serverSite": true,
        "ajax": {
            "url": BASE_URL + "restrict/ajax_list_course",
            "type": "POST",
        },
        "columnDefs": [
            { targets: "no-sort", orderable: false },
            { targets: "dt-center", className: "dt-center" },
        ]
    });

});

