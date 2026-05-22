window.submissions = window.localStorage.getItem("submissions") ?? 0;

window.addEventListener("DOMContentLoaded", () => {
    const confessionTextArea = document.getElementById("confession");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", showSubmitConfirmation);
    confessionTextArea.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            showSubmitConfirmation();
        } else {
            submitButton.ariaDisabled = confessionTextArea.value.trim() === "";
        }
    });

    function showSubmitConfirmation() {
        if (confessionTextArea.value.trim() === "") return;
        if (confirm("Are you sure you want to submit this confession?")) {
            submit();
        }
    }

    function submit() {
        window.submissions++;
        window.localStorage.setItem("submissions", window.submissions);
        confessionTextArea.value = "";
    }
});
