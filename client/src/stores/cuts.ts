import type { animal, cut } from "@/types/animals"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useCutsStore = defineStore('cuts', () => {
    const animal = ref<animal>({} as animal)
    const cut = ref<cut>({} as cut)

    /**
     * Returns true if the animal object is empty, false otherwise.
     * @returns {boolean} true if animal is empty
     */
    function isAnimalEmpty(){
        return Object.keys(animal.value).length === 0
    }

    /**
     * Sets the animal object to the given value.
     * @param {Object} value - the value to set the animal object to
     */
    function setAnimal(value: animal){
        animal.value = value
    }

    /**
     * Resets the animal object to an empty object.
     */
    function resetAnimal(){
        animal.value = {} as animal
    }

    /**
     * Resets the cut value to an empty object.
     */
    function resetCut(){
        cut.value = {} as cut
    }

    /**
     * Returns true if the cut value is an empty object, false otherwise.
     * @returns {boolean} true if cut is empty
     */
    function isCutEmpty(){
        return Object.keys(cut.value).length === 0
    }

    /**
     * Retrieves the current value of the animal object.
     * @returns {Ref<Object>} The current animal object.
     */
        function getAnimal(){
            return animal.value
        }

    /**
     * Retrieves the cut object.
     * @returns {Ref<Object>} The current cut object.
     */
    function getCut(){
        return cut
    }

    /**
     * Sets the cut object to the given value.
     * @param {cut} value - the value to set the cut object to
     */
    function setCut(value: cut){
        cut.value = value
    }
    return { cut, getAnimal, getCut, setCut, isAnimalEmpty, setAnimal, resetAnimal, resetCut, isCutEmpty }
})