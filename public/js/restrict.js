$(function(){

    $("#btn_add_course").click(function(){
        clearErrors();
        $("#form_course")[0].reset();///Limpa todos os campos do form
        $("#course_img_path").attr("src","");
        $("#modal_course").modal();
    });

    $("#btn_add_member").click(function (){
        $("#modal_member").modal();
    });

    $("#btn_add_user").click(function (){
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


});
