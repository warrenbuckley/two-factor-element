export {};
const form = document.querySelector("form");

// Add a submit event listener to the form
// To prevent submitting and seeing the submitted data in the console for debugging
form?.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('e', e);

     /** Get all of the form data */
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('formData', formData);

    formData.forEach((value, key) => {
        console.log('Form item', key, value);
    });
});