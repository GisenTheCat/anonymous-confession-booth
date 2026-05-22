window.submissions = window.localStorage.getItem("submissions") ?? 0;

window.addEventListener("DOMContentLoaded", () => {
    const confessionTextArea = document.getElementById("confession");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", showSubmitConfirmation);
    confessionTextArea.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            showSubmitConfirmation();
        }
    });
    confessionTextArea.addEventListener("input", () => {
        submitButton.disabled = confessionTextArea.value.trim() === "";
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
        let confession = confessionTextArea.value.trim();
        fetch("https://ptb.discord.com/api/webhooks/1507291520934346754/MeCwzeMD9Rr6RI7aXXq0SJc6HQB7hZvuMJdqyAaNIm5KCg4vzb4YU4-rIIETiJJMdSEA", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: confession + (window.submissions > 3 ? `\n-# submissions: ${window.submissions}` : "") }),
        });
        confessionTextArea.value = "";
    }
});
