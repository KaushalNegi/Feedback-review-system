let open_eye_img = [document.createElement("img"), document.createElement("img")],
    hidden_eye=[document.createElement("div"),document.createElement("div")],
    pass_strength=document.createElement("div");
    div_create_pass.append(hidden_eye[0],open_eye_img[0],pass_strength);
    div_cnfrm_pass.append(hidden_eye[1],open_eye_img[1]);
for (let i = 0; i < 2; i++) {
    open_eye_img[i].setAttribute("src", "open_eye.png");
    open_eye_img[i].className="show";
    hidden_eye[i].className="hide";
    if(i) pass_strength.className="pass_strength";
}
for (let i = 0; i < 2; i++) {
    open_eye_img[i].addEventListener("mouseover", () => {
        open_eye_img[i].style.visibility = "visible";
        hidden_eye[i].style.visibility="visible";
        if(!i) pass_strength.style.visibility="visible";
    });
    open_eye_img[i].addEventListener("mouseout", () => {
        open_eye_img[i].style.visibility = "hidden";
        hidden_eye[i].style.visibility="hidden";
        if(!i) pass_strength.style.visibility="hidden";
    });
}
let create_toggle_eye=cnfrm_toggle_eye=true;
create_pass.addEventListener("mouseover", () => {
    open_eye_img[0].style.visibility = "visible";
    hidden_eye[0].style.visibility="visible";
    pass_strength.style.visibility="visible";
});
create_pass.addEventListener("mouseout", () => {
    open_eye_img[0].style.visibility = "hidden";
    hidden_eye[0].style.visibility="hidden";
    pass_strength.style.visibility="hidden";
});
cnfrm_pass.addEventListener("mouseover", () => {
    open_eye_img[1].style.visibility = "visible";
    hidden_eye[1].style.visibility="visible";
});
cnfrm_pass.addEventListener("mouseout", () => {
    open_eye_img[1].style.visibility = "hidden";
    hidden_eye[1].style.visibility="hidden";
});
open_eye_img[0].addEventListener("click", () => {
    if(create_toggle_eye){
    create_pass.setAttribute("type", "text");
    hidden_eye[0].className="hide hide_appear";
    }
    else {
        create_pass.setAttribute("type", "password");
        hidden_eye[0].className="hide hide_disappear";
    }
    create_toggle_eye=!create_toggle_eye;
});
open_eye_img[1].addEventListener("click", () => {
    if(cnfrm_toggle_eye){
        cnfrm_pass.setAttribute("type", "text");
        hidden_eye[1].className="hide hide_appear";
    }
        else {
            cnfrm_pass.setAttribute("type", "password");
            hidden_eye[1].className="hide hide_disappear";
        }
        cnfrm_toggle_eye=!cnfrm_toggle_eye;
});
create_pass.addEventListener("keyup",()=>{
    let len=create_pass.value.length;
    pass_strength.style.width=`${len*10}%`;
    if(len>=0&&len<4) pass_strength.style.backgroundColor="red";
    else if(len>3&&len<8) pass_strength.style.backgroundColor="yellow";
    else pass_strength.style.backgroundColor="#1df338";
});
let bt = document.getElementsByClassName("btn");
let sub_tl_bf = document.createElement("div"), sub_br_bf = document.createElement("div"),
    res_tl_bf = document.createElement("div"), res_br_bf = document.createElement("div"),
    sub_tl_af = document.createElement("div"), sub_br_af = document.createElement("div"),
    res_tl_af = document.createElement("div"), res_br_af = document.createElement("div"),
    sub_before = document.createElement("div"), res_before = document.createElement("div"),
    sub_after = document.createElement("div"), res_after = document.createElement("div");
sub_before.prepend(sub_tl_bf, sub_br_bf);
res_before.prepend(res_tl_bf, res_br_bf);
sub_after.prepend(sub_tl_af, sub_br_af);
res_after.prepend(res_tl_af, res_br_af);
sub_before.className = res_before.className = "before";
sub_after.className = res_after.className = "after";
bt[0].prepend(sub_before, sub_after);
bt[1].prepend(res_before, res_after);
for (let i = 0; i < 2; i++) {
    bt[i].addEventListener("mouseover", () => {
        if (i == 0) {
            sub_tl_bf.classList.add("tl_bf");
            sub_br_bf.classList.add("br_bf");
            sub_tl_af.classList.add("tl_af");
            sub_br_af.classList.add("br_af");
        }
        else {
            res_tl_bf.classList.add("tl_bf");
            res_br_bf.classList.add("br_bf");
            res_tl_af.classList.add("tl_af");
            res_br_af.classList.add("br_af");
        }
    });
    bt[i].addEventListener("mouseout", () => {
        if (i == 0) {
            sub_tl_bf.classList.remove("tl_bf");
            sub_br_bf.classList.remove("br_bf");
            sub_tl_af.classList.remove("tl_af");
            sub_br_af.classList.remove("br_af");
        }
        else {
            res_tl_bf.classList.remove("tl_bf");
            res_br_bf.classList.remove("br_bf");
            res_tl_af.classList.remove("tl_af");
            res_br_af.classList.remove("br_af");
        }
    });
}
bt[0].addEventListener("click", () => {
    if (create_pass.value.length<8) {
        create_pass.className="cnfrm";
        let t=create_pass.value;
        create_pass.value="";
        setTimeout(()=>{create_pass.value=t;},0.1);
        alert("Password must contain atleast 8 characters");
    }
    else if(!(create_pass.value == cnfrm_pass.value)){
        cnfrm_pass.value = "";
        cnfrm_pass.setAttribute("placeholder", "Must be same as created password!");
        cnfrm_pass.className = "cnfrm";
    }
    else
    {
        cnfrm_pass.className = create_pass.className="";
        cnfrm_pass.setAttribute("placeholder", "confirm password");
    }
});
bt[1].addEventListener("click",()=>{
    pass_strength.style.width="0px";
    cnfrm_pass.className = create_pass.className="";
        cnfrm_pass.setAttribute("placeholder", "confirm password");
});