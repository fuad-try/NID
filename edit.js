document.addEventListener("DOMContentLoaded", function () {
    // Select all span elements inside #content
    const spans = document.querySelectorAll("#content span");

    spans.forEach(span => {
        span.setAttribute("contenteditable", "true");
        span.style.outline = "none"; // Remove default outline

        // Add styles for focus
        span.addEventListener("focus", () => {
            span.style.border = "5px solid #097457"; // Dark green border
            span.style.padding = "2px"; // Add padding to avoid layout shift
            span.style.borderRadius = "3px"; // Optional: Rounded corners for better visibility
        });

        // Remove border on blur
        span.addEventListener("blur", () => {
            span.style.border = "none";
        });
    });
});