function check_mt(img) {
    if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 120 && window.screen.height > 800 && !img.parentNode.parentNode.classList.contains("hiden")) {
        img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `120px`
    } else if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 80 && window.screen.height <= 800 && !img.parentNode.parentNode.classList.contains("hiden")) {
        img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `80px`
    }
    var padding = (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].clientHeight) / 2
    var parent_height = img.parentNode.parentNode.querySelector(".ask_shape").clientHeight
    if (window.screen.width > 1280) {
        img.style.marginTop = String(parent_height - img.clientHeight + 20) + "px"
    }
    img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".f_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".f_ask_shape").clientHeight) + "px"
    img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".s_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".s_ask_shape").clientHeight) + "px"
    img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".t_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".t_ask_shape").clientHeight) + "px"
    img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding) + "px"
}

function show_answer(dom) {
    if (dom.nextElementSibling.classList.contains("hiden")) {
        dom.parentNode.querySelectorAll(".answer").forEach(element => {
            element.classList.add("hiden")
        });
        dom.parentNode.querySelectorAll(".question").forEach(element => {
            element.classList.remove("hiden")
        });
        dom.nextElementSibling.classList.remove("hiden");
        dom.querySelector(".question").classList.add("hiden");
        check_mt(dom.nextElementSibling.querySelector(".ask_img").children[0])
    } else {
        dom.nextElementSibling.classList.add("hiden")
        dom.querySelector(".question").classList.remove("hiden");
    }
}

function bot_null(dom){ 
    var parent_height = dom.parentNode.clientHeight
    var padding = (parent_height - dom.clientHeight)
    dom.style.paddingTop = String(padding) + "px"
}