class SubscrIP {
  constructor(formId, responseElementId) {
    this.form = document.getElementById(formId);
    this.responseElement = document.getElementById(responseElementId);
    this.init();
  }

  init() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.sendForm();
    });
  }

  async sendForm() {
    const formData = new FormData(this.form);
    const response = await fetch(this.form.action, {
      method: "POST",
      body: formData,
    });

    this.responseElement.innerHTML = `Thanks for your subscription`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SubscrIP("SUBONE", "responseone");
});
