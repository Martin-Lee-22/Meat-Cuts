import { POSITION } from 'vue-toastification';
import { useToast } from 'vue-toastification';
import "vue-toastification/dist/index.css";

const toast = useToast();

/**
 * Calls the toast function with the given type and message, using the specified options.
 * @param {any} type - The type of the toast message. Can be one of the following: TYPE.DEFAULT, TYPE.SUCCESS, TYPE.INFO, TYPE.WARNING, TYPE.ERROR.
 * @param {string} message - The text to display in the toast message.
 */
export function callToast(type: any, message: string): void{
    const options = {
        timeout: 1500,
        position: POSITION.TOP_RIGHT,
        type: type,
        pauseOnHover: true,
        closeOnClick: true,
        hideProgressBar: true,
        showCloseButtonOnHover: true,
        draggablePercent: 0.6,
        closeButton: true,
        draggable: true,
        icon: true,
        rtl: false
    }
    toast(message, options);
}