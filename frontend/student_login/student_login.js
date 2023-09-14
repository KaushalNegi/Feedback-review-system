let open_eye_img = document.createElement("img"),
    hidden_eye=document.createElement("div");
    div_pass.append(hidden_eye,open_eye_img);
    open_eye_img.setAttribute("src", "open_eye.png");
    open_eye_img.className="show";
    hidden_eye.className="hide";
    open_eye_img.addEventListener("mouseover", () => {
        open_eye_img.style.visibility = "visible";
        hidden_eye.style.visibility="visible";
    });
    open_eye_img.addEventListener("mouseout", () => {
        open_eye_img.style.visibility = "hidden";
        hidden_eye.style.visibility="hidden";
    });
let toggle_eye=true;
pass.addEventListener("mouseover", () => {
    open_eye_img.style.visibility = "visible";
    hidden_eye.style.visibility="visible";
});
pass.addEventListener("mouseout", () => {
    open_eye_img.style.visibility = "hidden";
    hidden_eye.style.visibility="hidden";
});
open_eye_img.addEventListener("click", () => {
    if(toggle_eye){
    pass.setAttribute("type", "text");
    hidden_eye.className="hide hide_appear";
    }
    else {
        pass.setAttribute("type", "password");
        hidden_eye.className="hide hide_disappear";
    }
    toggle_eye=!toggle_eye;
});
let bt = document.getElementsByClassName("btn");
let sub_tl_bf = document.createElement("div"),sub_br_bf = document.createElement("div"),
res_tl_bf = document.createElement("div"),res_br_bf = document.createElement("div"),
sub_tl_af = document.createElement("div"),sub_br_af = document.createElement("div"),
res_tl_af = document.createElement("div"),res_br_af = document.createElement("div"),
sub_before=document.createElement("div"),res_before=document.createElement("div"),
sub_after=document.createElement("div"),res_after=document.createElement("div");
sub_before.prepend(sub_tl_bf,sub_br_bf);
res_before.prepend(res_tl_bf,res_br_bf);
sub_after.prepend(sub_tl_af,sub_br_af);
res_after.prepend(res_tl_af,res_br_af);
sub_before.className=res_before.className="before";
sub_after.className=res_after.className="after";
bt[0].prepend(sub_before,sub_after);
bt[1].prepend(res_before,res_after);
for(let i=0;i<2;i++){
    bt[i].addEventListener("mouseover",()=>{
        if(i==0){
            sub_tl_bf.classList.add("tl_bf");
            sub_br_bf.classList.add("br_bf");
            sub_tl_af.classList.add("tl_af");
            sub_br_af.classList.add("br_af");
        }
        else{
            res_tl_bf.classList.add("tl_bf");
            res_br_bf.classList.add("br_bf");
            res_tl_af.classList.add("tl_af");
            res_br_af.classList.add("br_af");
        }
    });
    bt[i].addEventListener("mouseout",()=>{
        if(i==0){
            sub_tl_bf.classList.remove("tl_bf");
            sub_br_bf.classList.remove("br_bf");
            sub_tl_af.classList.remove("tl_af");
            sub_br_af.classList.remove("br_af");
        }
        else{
            res_tl_bf.classList.remove("tl_bf");
            res_br_bf.classList.remove("br_bf");
            res_tl_af.classList.remove("tl_af");
            res_br_af.classList.remove("br_af");
        }
    });
}
fetch("/popup")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data)
            alert("No user found!");
    })
    .catch(err=>console.log(err));