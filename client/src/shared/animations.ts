import gsap from "gsap"

/* Functions that are used for Vue animations */

/**
 * Staggers the appearance of elements in a list by animating the element's
 * opacity to 1 and translateY to 0 with a delay that is proportional to
 * the element's data-index.
 * @param {any} el - The element that is being animated.
 */
export function staggerListOnEnter(el: any) {
    gsap.to(el, {
        opacity: 1,
        translateY: 0,
        delay: el.dataset.index * 0.1,
    })
}

/**
 * Staggers the translation and opacity of elements in a list on leave,
 * by animating the element's opacity to 0 and translateY to 60px
 * with a delay that is proportional to the element's data-index.
 * @param {any} el - The element that is being animated.
 */
export function staggerListOnLeave(el: any){
    gsap.to(el, {
        opacity: 0,
        translateY: 60,
        delay: el.dataset.index * 0.1,
    })

}