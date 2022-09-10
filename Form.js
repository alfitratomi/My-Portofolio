const scriptURL = 'https://script.google.com/macros/s/AKfycbx_FcljChRBrxEGSoKvy3gI_hU2Wh7DUy2So1chn6KfQ7hzoTTucPgSm4TZQ9vDcuot/exec'
        const form = document.forms['tom-contact-form']
        const btnKirim = document.getElementById("btnKirim");
        const btnLoading = document.getElementById("btnLoading");
        const myAlert = document.getElementById("myAlert");

        form.addEventListener('submit', e => {
            e.preventDefault()
            //Ketika tombol submit di klik 
            //tampilkan tobol loading, hilangkan tombol kirim
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {

                    //tampilkan tobol kirim, hilangkan tombol loading
                    btnLoading.classList.toggle('d-none')
                    btnKirim.classList.toggle('d-none')

                    //tampilkan alert
                    myAlert.classList.toggle('d-none')

                    // mereset from
                    form.reset();
                    console.log('Success!', response)
                })
                .catch(error => console.error('Error!', error.message))
        })