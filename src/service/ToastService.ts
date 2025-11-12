import Toastify from 'toastify-js';

interface ToastServiceInterface {
    showError(message: string): void
}

export default class ToastService implements ToastServiceInterface{
    showError(message:string) {
        Toastify({
            text: message || "Server error",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }

    showSuccess(message: string) {
        Toastify({
            text: message || "Success",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }
}