function check_mt(img) {
    var ask_main_shape = img.parentNode.parentNode.querySelector(".ask_main_shape")
    var ask_main_shape_h = ask_main_shape.clientHeight

    ask_main_shape.querySelector(".f_shape").style.marginTop = String((ask_main_shape_h - ask_main_shape.querySelector(".f_shape").clientHeight) / 2) + "px"
    ask_main_shape.querySelector(".s_shape").style.marginTop = String((ask_main_shape_h - ask_main_shape.querySelector(".f_shape").clientHeight) / 2) + "px"

    if (window.screen.width > 1300) {
        if (ask_main_shape_h > 120) {
            var new_img_mt = ((ask_main_shape_h - img.parentNode.clientHeight) / 2)
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

                ask_main_shape.querySelector(".f_shape").style.marginTop = String((ask_main_shape_h) / 4 * 3) + "px"
                ask_main_shape.querySelector(".s_shape").style.marginTop = String((ask_main_shape_h) / 4 * 3) + "px"
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
    var inter = setInterval(() => {
        if (document.getElementsByClassName("palm_each")[0].clientHeight != 0 && document.getElementsByClassName("palm_each")[1].clientHeight != 0) {
            var parent_height = document.getElementsByClassName("palm_each")[0].clientHeight
            var padding = (parent_height - dom.clientHeight)
            dom.style.paddingTop = String(padding) + "px"
            clearInterval(inter)
        }
    }, 100) 
}

function show_menu() {
    if (document.querySelector(".adaptive_menu").classList.contains("element-show")) {
        document.querySelector(".adaptive_menu").classList.remove("element-show")
        document.querySelector(".adaptive_menu").classList.add("element-hiden")
    } else {
        document.querySelector(".adaptive_menu").classList.remove("element-hiden")
        document.querySelector(".adaptive_menu").classList.add("element-show")
    }
    
}

function open_twitter() {
    window.open("https://twitter.com/SolangelesDream", '_blank');
}

function open_discord() {
    window.open("https://discord.gg/RUyjhNheDu", '_blank');
}