function check_mt(img, is_load) {
    
    if (is_load == false) {
        if (window.screen.width > 1024) {
            if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 120 && window.screen.height > 800 && !img.parentNode.parentNode.classList.contains("hiden")) {
                img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `120px`
            } else if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 80 && window.screen.height <= 800 && !img.parentNode.parentNode.classList.contains("hiden")) {
                img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `80px`
            }
        } else {
            if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 90 && window.screen.width > 500 && !img.parentNode.parentNode.classList.contains("hiden")) {
                img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `90px`
            } else if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 80 && window.screen.width <= 500 && !img.parentNode.parentNode.classList.contains("hiden")) {
                img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `50px`
            }
        }
        var padding = 0
        padding = (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].clientHeight) / 2
        if (img.parentNode.parentNode.querySelector(".main_ask_shape").classList.contains("big_answer")) {
            padding = (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[1].clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[2].clientHeight) / 2
        }

        if (!img.parentNode.parentNode.querySelector(".main_ask_shape").classList.contains("img_answer")) {
            if (padding != 0) {
                if (img.parentNode.parentNode.querySelector(".main_ask_shape").classList.contains("big_answer")) {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding / 2) + "px"
                    img.parentNode.parentNode.querySelector(".main_ask_shape").children[3].style.marginBottom = String(padding / 2) + "px"
                } else {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding) + "px"
                    img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginBottom = String(padding) + "px"
                }
            } else {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = "10px"
                    img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginBottom = "10px"
            }
        } else {
            img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding) + "px"
        }
        
        var parent_height = img.parentNode.parentNode.querySelector(".ask_shape").clientHeight
        if (window.screen.width > 1280) {
            img.style.marginTop = String(parent_height - img.clientHeight + 20) + "px"
        }
        img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".f_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".f_ask_shape").clientHeight) + "px"
        img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".s_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".s_ask_shape").clientHeight) + "px"
        img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".t_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".t_ask_shape").clientHeight) + "px"
    } else {
        setTimeout(() => {
            if (window.screen.width > 1024) {
                if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 120 && window.screen.height > 800 && !img.parentNode.parentNode.classList.contains("hiden")) {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `120px`
                } else if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 80 && window.screen.height <= 800 && !img.parentNode.parentNode.classList.contains("hiden")) {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `80px`
                }
            } else {
                if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 90 && window.screen.width > 500 && !img.parentNode.parentNode.classList.contains("hiden")) {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `90px`
                } else if (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight < 50 && window.screen.width <= 500 && !img.parentNode.parentNode.classList.contains("hiden")) {
                    img.parentNode.parentNode.querySelector(".main_ask_shape").style.height = `50px`
                }
            }
            var padding = 0
            padding = (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].clientHeight) / 2
            if (img.parentNode.parentNode.querySelector(".main_ask_shape").classList.contains("big_answer")) {
                padding = (img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[1].clientHeight - img.parentNode.parentNode.querySelector(".main_ask_shape").children[2].clientHeight) / 2
            }
    
            if (!img.parentNode.parentNode.querySelector(".main_ask_shape").classList.contains("img_answer")) {
                if (padding != 0) {
                    if (img.parentNode.parentNode.querySelector(".main_ask_shape").classList.contains("big_answer")) {
                        img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding / 2) + "px"
                        img.parentNode.parentNode.querySelector(".main_ask_shape").children[3].style.marginBottom = String(padding / 2) + "px"
                    } else {
                        img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding) + "px"
                        img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginBottom = String(padding) + "px"
                    }
                } else {
                    if (window.screen.width < 1025) {
                        img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = "10px"
                        img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginBottom = "10px"
                    }
                }
            } else {
                img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].style.marginTop = String(padding) + "px"
            }
            
            var parent_height = img.parentNode.parentNode.querySelector(".ask_shape").clientHeight
            if (window.screen.width > 1280) {
                img.style.marginTop = String(parent_height - img.clientHeight + 20) + "px"
            } else {
                img.style.marginTop = String(parent_height - img.clientHeight + 10) + "px"
            }
            img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".f_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".f_ask_shape").clientHeight) + "px"
            img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".s_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".s_ask_shape").clientHeight) + "px"
            img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".t_ask_shape").style.marginTop = String(parent_height - img.parentNode.parentNode.querySelector(".ask_shape").querySelector(".t_ask_shape").clientHeight) + "px"
        }, 500);
    }
    
    /*
    if (img.parentNode.parentNode.querySelector(".main_ask_shape").children[0].clientHeight + padding > img.parentNode.parentNode.querySelector(".main_ask_shape").clientHeight) {
        padding = padding / 2
    }
    */
    
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