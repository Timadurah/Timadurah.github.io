class FormHandler {
    constructor(formId, responseElementId) {
        this.form = document.getElementById(formId);
        this.responseElement = document.getElementById(responseElementId);
        this.name = document.getElementById("name");
        this.mail = document.getElementById("email");
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.sendForm();
        });
    }
    
    async sendForm() {
        const formData = new FormData(this.form);
        const response = await fetch(this.form.action, {
            method: 'POST',
            body: formData
        });    
        
        this.responseElement.innerHTML = `Queue Joined successfully!`;
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FormHandler('userForm', 'response');
    new FormHandler('userForm2', 'response2');
});
