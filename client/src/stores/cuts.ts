import type { animal, cut } from "@/types/animals"
import { defineStore } from "pinia"
import { ref, type Ref } from "vue"

/* A store that manages/shares the animal and cut objects throughout the application */

export const useCutsStore = defineStore('cuts', () => {
    const animal = ref<animal>({} as animal)
    const cut = ref<cut>({} as cut)

    /**
     * Returns true if the animal object is empty, false otherwise.
     * @returns {boolean} true if animal is empty
     */
    function isAnimalEmpty(): boolean {
        return Object.keys(animal.value).length === 0
    }

    /**
     * Sets the animal object to the given value.
     * @param {Object} value - the value to set the animal object to
     */
    function setAnimal(value: animal): void {
        animal.value = value
    }

    /**
     * Resets the animal object to an empty object.
     */
    function resetAnimal(): void {
        animal.value = {} as animal
    }

    /**
     * Resets the cut value to an empty object.
     */
    function resetCut(): void {
        cut.value = {} as cut
    }

    /**
     * Returns true if the cut value is an empty object, false otherwise.
     * @returns {boolean} true if cut is empty
     */
    function isCutEmpty(): boolean {
        return Object.keys(cut.value).length === 0
    }

    /**
     * Retrieves the current value of the animal object.
     * @returns {Ref<Object>} The current animal object.
     */
        function getAnimal(): animal {
            return animal.value
        }

    /**
     * Retrieves the cut object.
     * @returns {Ref<Object>} The current cut object.
     */
    function getCut(): Ref<cut> {
        return cut
    }

    /**
     * Sets the cut object to the given value.
     * @param {cut} value - the value to set the cut object to
     */
    function setCut(value: cut): void {
        cut.value = value
    }
    
    return { cut, getAnimal, getCut, setCut, isAnimalEmpty, setAnimal, resetAnimal, resetCut, isCutEmpty }
})