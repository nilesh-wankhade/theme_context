

$("#allWord").click(function () {
    $("#and_not").hide();
    $("#proximity").show();
    $("#display_date").hide();

});

$(".hideProximity").click(function () {
    $("#and_not").hide()
    $("#proximity").hide()
    $("#display_date").hide()
});

$("#showDate").click(function () {
    $("#and_not").hide();
    $("#proximity").hide();
    $("#display_date").show();


});

$("#boolean").click(function () {       
    $("#and_not").show()
});

$("#details_view").click(function () {
    $(".concise-view").hide()
    $(".detail-view").show()
    $("#details_view").addClass("btn-secondary text-white");
    $("#concise_view").removeClass("btn-secondary text-white");
    $("#details_view").removeClass("btn-outline-bg bg-white");
    $("#concise_view").addClass("btn-outline-bg bg-white");

});

$("#concise_view").click(function () {
    $(".detail-view").hide()
    $(".concise-view").show()
    $("#concise_view").addClass("btn-secondary text-white");
    $("#details_view").removeClass("btn-secondary text-white");
    $("#concise_view").removeClass("btn-outline-bg bg-white");
    $("#details_view").addClass("btn-outline-bg bg-white");
});


$('#microphoneIcon').click(function () {
    // Open a new window or tab
    // var newWindow = window.open('https://www.google.com', '_blank', 'width=600,height=400');

    // Ask for microphone access using the Web Speech API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                // Microphone access granted
                console.log('Microphone access granted');

                // Close the window after a delay (you may handle this differently)
                setTimeout(function () {
                    newWindow.close();
                }, 5000); // Close after 5 seconds (adjust as needed)
            })
            .catch(function (error) {
                // Microphone access denied or an error occurred
                console.error('Error accessing microphone:', error);

                // You may want to inform the user or handle this differently
            });
    } else {
        // Browser doesn't support getUserMedia
        console.error('getUserMedia not supported in this browser');
    }
});

function redirect(item) {
    var ask = window.confirm("You are being redirected to an external web page. Are you sure to continue?");
    if (ask) {
        switch (item) {
            case item = 'ePAY':
                window.open('https://pay.ecourts.gov.in/epay', '_blank');
                break;
            case item = 'NJDG':
                window.open('https://njdg.ecourts.gov.in/njdgnew/index.php', '_blank');
                break;
            case item = 'eCourts':
                window.open('https://ecourts.gov.in/ecourts_home/', '_blank')
                break;
            case item = 'eCourts':
                window.open('https://ecommitteesci.gov.in/', '_blank')
                break;
            case item = 'eCommitte':
                window.open('https://ecourts.gov.in/ecourts_home/', '_blank')
                break;
            case item = 'rti':
                window.open('https://rtionline.gov.in/', '_blank')
                break;
            case item = 'data':
                window.open('https://data.gov.in/', '_blank')
                break;
            case item = 'ras':
                window.open('https://stage.ras.gov.in/v2', '_blank')
                break;
            case item = 'ilr':
                window.open('https://delhihighcourt.nic.in/NewIlrdsFile', '_blank')
                break;
            case item = 'Legislation':
                window.open('https://www.indiacode.nic.in/', '_blank')
                break;
            case item = 'Law_commission':
                window.open('https://lawcommissionofindia.nic.in', '_blank')
                break;
            case item = 'nielit':
                window.open('https://www.nielit.gov.in/', '_blank')

            default:
            // code block
        }
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})