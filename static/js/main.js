function check_mt(img) {
    var ask_main_shape = img.parentNode.parentNode.querySelector(".ask_main_shape")
    var ask_main_shape_h = ask_main_shape.clientHeight

    ask_main_shape.querySelector(".f_shape").style.marginTop = String((ask_main_shape_h - 20) / 2) + "px"
    ask_main_shape.querySelector(".s_shape").style.marginTop = String((ask_main_shape_h - 20) / 2) + "px"

    if (window.screen.width > 1300) {
        if (ask_main_shape_h > 130) {
            var now_img_mt = parseInt(String(window.getComputedStyle(ask_main_shape, null).getPropertyValue("margin-top")).slice(0, -2))
            var new_img_mt = ((ask_main_shape_h - img.parentNode.clientHeight) / 2) + now_img_mt
            img.parentNode.style.marginTop = String(new_img_mt) + "px"
        }
    } else if (window.screen.width < 1300 && window.screen.width > 500) {
        if (ask_main_shape_h > 100) {
            var now_img_mt = parseInt(String(window.getComputedStyle(ask_main_shape, null).getPropertyValue("margin-top")).slice(0, -2))
            var new_img_mt = ((ask_main_shape_h - img.parentNode.clientHeight) / 2) + now_img_mt
            img.parentNode.style.marginTop = String(new_img_mt) + "px"
        }
    } else {
        if (ask_main_shape_h > 50) {
            var now_img_mt = parseInt(String(window.getComputedStyle(ask_main_shape, null).getPropertyValue("margin-top")).slice(0, -2))
            var new_img_mt = ((ask_main_shape_h - img.parentNode.clientHeight) / 2) + now_img_mt
            img.parentNode.style.marginTop = String(new_img_mt) + "px"
        } else {
            if (ask_main_shape_h < 48) {
                var padding = String(( 50 - ask_main_shape.querySelector(".shape").children[0].clientHeight ) / 2) + "px"
                ask_main_shape.querySelector(".shape").children[0].style.paddingTop = padding
                ask_main_shape.querySelector(".shape").children[0].style.paddingBottom = padding

                ask_main_shape_h = img.parentNode.parentNode.querySelector(".ask_main_shape").clientHeight

                ask_main_shape.querySelector(".f_shape").style.marginTop = String((ask_main_shape_h - 20) / 4 * 3) + "px"
                ask_main_shape.querySelector(".s_shape").style.marginTop = String((ask_main_shape_h - 20) / 4 * 3) + "px"
            }
        }
    }
    
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
        check_mt(dom.nextElementSibling.querySelector(".ask_img").children[0], false)
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