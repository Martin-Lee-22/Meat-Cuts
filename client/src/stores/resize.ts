import { defineStore } from "pinia"
import { ref, watch } from "vue"
import { useCutsStore } from "./cuts"

/* A store that manages/shares the resize variables/functions throughout the application */

export const useResizeStore = defineStore('resize', () => {

    const initialWidth = 100 // Initial width of the first element
    const initialChangeWidth = 60
    const minFirstElementWidth = 45
    const maxFirstElementWidth = 60

    const firstElementWidth = ref(initialWidth)
    const secondElementWidth = ref(0)

    // Watch for changes in the animal object and update the width of the first and second element accordingly; Will reveal the recipes container.
    watch(useCutsStore().getCut(), ()=>{

        if(!useCutsStore().isCutEmpty()) {
            setFirstElementWidth(initialChangeWidth)
            setSecondElementWidth(initialWidth - initialChangeWidth)
        } else{
            setFirstElementWidth(initialWidth)
            setSecondElementWidth(0)
        }
    })

    /**
     * Resizes the width of the first element based on the x-coordinate of the given mouse event.
     * The width of the first element is set to the percentage of the window's width that the mouse
     * is currently over. The width of the second element is set to the remaining percentage of the
     * window's width.
     * @param {MouseEvent} event - the mouse event used to calculate the new width of the first element
     */
    function resizeElement(event: MouseEvent): void {
        let windowWidth = window.innerWidth
        let mouseXCoordinate = event.clientX
        let percentage = (mouseXCoordinate / windowWidth) * 100
        if(percentage >= minFirstElementWidth && percentage <= maxFirstElementWidth) {
            setFirstElementWidth(percentage)
            setSecondElementWidth(100 - percentage)
        }
    }

    /**
     * Retrieves the current width of the first element in pixels.
     * @returns {number} The current width of the first element in pixels.
     */
    function getFirstElementWidth(): number {
        return firstElementWidth.value
    }

    /**
     * Sets the width of the first element to the given value in pixels.
     * @param {number} width - The new width of the first element in pixels.
     */
    function setFirstElementWidth(width: number): void {
        firstElementWidth.value = width
    }

    /**
     * Retrieves the current width of the second element in pixels.
     * @returns {number} The current width of the second element in pixels.
     */
    function getSecondElementWidth(): number {
        return secondElementWidth.value
    }

    /**
     * Sets the width of the second element to the given value in pixels.
     * @param {number} width - The new width of the second element in pixels.
     */
    function setSecondElementWidth(width: number): void {
        secondElementWidth.value = width
    }
    return { getFirstElementWidth, setFirstElementWidth, getSecondElementWidth, setSecondElementWidth, resizeElement }
})