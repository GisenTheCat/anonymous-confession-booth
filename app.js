window.addEventListener("DOMContentLoaded", () => {
    const confessionTextArea = document.getElementById("confession");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", submit);
    confessionTextArea.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            submit();
        }
    });

    function submit() {}
});
