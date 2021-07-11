let text=document.getElementsByClassName('start_headline_block')[0];
let scroll_down=document.getElementsByClassName('start_scroll')[0];
let section_text=document.getElementsByClassName('section_text');
let section_img=document.getElementsByClassName('section_img');
let sky = document.getElementsByClassName('sky_img')[0];
let mountain = document.getElementsByClassName('mountains_img')[0];
let input = document.querySelector('input');
let html_el = document.querySelector('html');

input.onclick=()=>{
    html_el.classList.toggle('fixed');
}
scroll_down.onclick=()=>{
    let first_section=document.getElementById('first_section');
    first_section.scrollIntoView({block: "center", behavior: "smooth"});
}

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
max_scroll_env=scrollHeight+16 - document.documentElement.clientHeight;

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

window.onscroll=()=>{
    let scroll_value=window.scrollY
    if(scroll_value >=getOffset(section_img[0]).top - 500){
        section_text[0].style.transform = 'translate(0,0)';
        section_text[0].style.opacity = '1';
        section_img[0].style.transform = 'translate(0,0)';
        section_img[0].style.opacity = '1';
    }
    if(scroll_value >=getOffset(section_img[1]).top  - 400){
        section_text[1].style.transform = 'translate(0,0)';
        section_text[1].style.opacity = '1';
        section_img[1].style.transform = 'translate(0,0)';
        section_img[1].style.opacity = '1';
    }
    if(scroll_value >=getOffset(section_img[2]).top  - 500){
        section_text[2].style.transform = 'translate(0,0)';
        section_text[2].style.opacity = '1';
        section_img[2].style.transform = 'translate(0,0)';
        section_img[2].style.opacity = '1';
    }
    if (window.matchMedia("(max-width: 1425px)").matches == false){
        sky.style.top = scroll_value* -0.09 + '%';
        mountain.style.top = scroll_value* -0.0185 + 40 +'%';
    }
    text.style.top=scroll_value* 0.2 + '%';
    text.style.opacity= 150 -scroll_value*0.16+'%';
    

}
