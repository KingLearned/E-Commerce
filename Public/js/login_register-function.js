$('.Login_Form').on('submit', (e) => {
    e.preventDefault()
    $.ajax({
        method:"POST",
        data: {
            LogEmail: $('.cemail').val(),
            LogPwd: $('.cpassword').val()
        },
        success: (data) => {
            if(data.valid){
                window.location.href = data.valid
            }
            $('.ErrorMsg').html(data.Notify)
            setTimeout(() => {$('.ErrorMsg').html('')},3000)
        },
        error: (err) => {

        }
    })
})

$('.Register_Form').on('submit', (e) => {
    e.preventDefault()
    $.ajax({
        method:"POST",
        data: {
            RegFName: $('.First_Name').val(),
            RegLName: $('.Last_Name').val(),
            RegEmail: $('.email').val(),
            RegPwd: $('.pwd').val(),
            RegCPwd: $('.cpwd').val()
        },
        success: (data) => {
            if(data.valid){
                $('.Reg').html(data.valid)
                setTimeout(() => {$('.Reg').html('')
            $('input').val('')},3000)

            }
            $('.Reg').html(data.Notify)
            setTimeout(() => {$('.Reg').html('')},3000)
        },
    })
})