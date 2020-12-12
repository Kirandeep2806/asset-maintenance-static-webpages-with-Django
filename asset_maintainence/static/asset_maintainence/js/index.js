const element_full_btn = document.querySelector('.full_screen')

element_full_btn.addEventListener('click', event => {

    if (event.target.classList.contains('fa-expand')) {
        // Full screen code
        elem = document.documentElement
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }

        // normalize steps
        event.target.title = 'Exit ' + event.target.title
        event.target.classList.remove('fa-expand')
        event.target.classList.add('fa-compress')

    } else if (event.target.classList.contains('fa-compress')) {
        // Exit Full screen code
        elem = document.documentElement
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }

        // normalize steps
        event.target.title = event.target.title.slice(5)
        event.target.classList.add('fa-expand')
        event.target.classList.remove('fa-compress')
    }
})

function change_display() {

    var temp = document.querySelector(".tree-view-links");
    if (temp.style.display == "block")
        temp.style.display = "";
    else if (temp.style.display == "")
        temp.style.display = "block";
}

function bulkupload() {

    var modalBg = document.querySelector(".bg-modal");
    var modalClose = document.querySelector(".close-modal");
    var temp = document.querySelector('.modal');
    var selectedFile = document.getElementById("file");
    var filePathTxt = document.getElementById("upload_file");
    var cancel_btn = document.getElementById("cancel_btn");

    modalBg.style.display = "block";
    modalBg.style.opacity = "1";
    setTimeout(function () { temp.style.transform = "translate(-50%,0)"; }, 0);

    modalClose.addEventListener("click", () => {
        temp.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBg.style.display = "none"; }, 500);
    })

    selectedFile.onchange = function () {
        filePathTxt.value = selectedFile.files.item(0).name;
        filePathTxt.disabled = true;
    }

    cancel_btn.addEventListener("click", () => {
        temp.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBg.style.display = "none"; }, 500);
    })
}

function gotoimportlogs() {
    window.open("/bulk_import_logs", "_self");
}

function gotohome() {
    window.open("/", "_self")
}

function change_display() {

    var temp = document.querySelector(".tree-view-links");
    if (temp.style.display == "block")
        temp.style.display = "";
    else if (temp.style.display == "")
        temp.style.display = "block";
}

function advanced_filter() {
    var modalBg = document.querySelector(".bg-modal-filter");
    var modalClose = document.querySelector(".close-modal-filter");
    var temp = document.querySelector('.modal-filter');

    modalBg.style.display = "block";
    modalBg.style.opacity = "1";
    setTimeout(function () { temp.style.transform = "translate(-50%,0)"; }, 0);

    modalClose.addEventListener("click", () => {
        temp.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBg.style.display = "none"; }, 500);
    })
}

function deactivate() {
    var modalBg = document.querySelector(".bg-modal-deactivate");
    var modalClose = document.querySelector(".close-modal-deactivate");
    var temp = document.querySelector('.modal-deactivate');
    var optional_close = document.getElementById("deactivateNo");

    modalBg.style.display = "block";
    modalBg.style.opacity = "1";
    setTimeout(function () { temp.style.transform = "translate(-50%,0)"; }, 0);

    modalClose.addEventListener("click", () => {
        temp.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBg.style.display = "none"; }, 500);
    })

    optional_close.addEventListener("click", () => {
        temp.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBg.style.display = "none"; }, 500);
    })
}

window.onresize = function () {
    var defaultContentWidth = window.innerWidth;
    var defaultContentHeight = window.innerHeight;
    if (defaultContentHeight == screen.height && defaultContentWidth == screen.width) {
        var change_the_position = document.querySelectorAll(".main-content .far .tooltiptext");
        change_the_position.forEach(medium => {
            medium.style.top = "calc(24% - 4%)";
            medium.style.top = "-webkit-calc(24% - 4%)";
            medium.style.top = "-o-calc(24% - 4%)";
            medium.style.top = "-ms-calc(24% - 4%)";
        })
    }

    else if (defaultContentHeight == window.innerHeight && defaultContentWidth == window.innerWidth) {
        var change_the_position = document.querySelectorAll(".main-content .far .tooltiptext");
        change_the_position.forEach(medium => {
            medium.style.top = "calc(24%)";
            medium.style.top = "-webkit-calc(24%)";
            medium.style.top = "-o-calc(24%)";
            medium.style.top = "-ms-calc(24%)";
        })
    }
}

var selectedFileInEdit = document.getElementById("file_edit");

selectedFileInEdit.onchange = () => {
    var pathToBeInsertedTitle = document.getElementById("upload_file_edit");
    pathToBeInsertedTitle.value = selectedFileInEdit.files.item(0).name;
    pathToBeInsertedTitle.disabled = true;
}

function AddInfoModal() {
    var modalBgEdit = document.querySelector(".bg-modal-edit");
    var modalCloseEdit = document.querySelector(".close-modal-edit");
    var tempEdit = document.querySelector('.modal-edit');
    var optional_closeEdit = document.getElementById("cancel_btn_edit");

    modalBgEdit.style.display = "block";
    modalBgEdit.style.opacity = "1";
    setTimeout(function () { tempEdit.style.transform = "translate(-50%,0)"; }, 0);

    modalCloseEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })

    optional_closeEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })
}


function UploadDocuments() {
    var modalBgEdit = document.querySelector(".bg-modal-edit");
    var modalCloseEdit = document.querySelector(".close-modal-edit");
    var tempEdit = document.querySelector('.modal-edit');
    var optional_closeEdit = document.getElementById("cancel_btn_edit");
    var adddoc = document.getElementById("add_document");
    var hide_row = document.getElementById("hide_this_onclick");
    var display_row = document.getElementById("display_this_onclick");

    adddoc.addEventListener("click", () => {
        adddoc.disabled = true;
        adddoc.style.opacity = "0.8";
        hide_row.style.display = "none";
        display_row.style.display = "table-row";
        console.log(adddoc.disabled);
    })
    modalBgEdit.style.display = "block";
    modalBgEdit.style.opacity = "1";
    setTimeout(function () { tempEdit.style.transform = "translate(-50%,0)"; }, 0);

    modalCloseEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })

    optional_closeEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })
}