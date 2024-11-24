import gsap from "gsap"
function staggerListOnEnter(el: any) {
    gsap.to(el, {
        opacity: 1,
        translateY: 0,
        delay: el.dataset.index * 0.1,
    })
}


function staggerListOnLeave(el: any){
    gsap.to(el, {
        opacity: 0,
        translateY: 60,
        delay: el.dataset.index * 0.1,
    })

}

export {staggerListOnEnter, staggerListOnLeave}