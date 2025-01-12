document.addEventListener('DOMContentLoaded', function() {
    // Check for `.quick-input-widget` periodically until found
    const checkElement = setInterval(() => {
        const commandDialog = document.querySelector(".quick-input-widget");
        if (commandDialog) {
            // Initialize observer for style changes on `.quick-input-widget`
            setupObserver(commandDialog);
            clearInterval(checkElement);
        } else {
            console.log("Command dialog not found yet. Retrying...");
        }
    }, 500); // Check every 500ms

    // Unified keydown event listener for Ctrl+P and Escape keys
    document.addEventListener('keydown', function(event) {
        if ((event.metaKey || event.ctrlKey) && event.key === 'p') {
            event.preventDefault();
            toggleBlurEffect(true); // Show blur on Ctrl+P
        } else if (event.key === 'Escape' || event.key === 'Esc') {
            event.preventDefault();
            toggleBlurEffect(false); // Hide blur on Escape
        }
    });

    function setupObserver(commandDialog) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    // Show or hide blur based on `display` status of `commandDialog`
                    toggleBlurEffect(commandDialog.style.display !== 'none');
                }
            });
        });

        observer.observe(commandDialog, { attributes: true });
    }

    function toggleBlurEffect(show) {
        const targetDiv = document.querySelector(".monaco-workbench");
        if (!targetDiv) {
            console.warn("Target div '.monaco-workbench' not found.");
            return;
        }

        // If 'show' is true, add the blur effect, otherwise remove it
        const existingBlur = document.getElementById("command-blur");
        if (show && !existingBlur) {
            const blurElement = document.createElement("div");
            blurElement.setAttribute('id', 'command-blur');
            blurElement.addEventListener('click', () => blurElement.remove());
            targetDiv.appendChild(blurElement);
        } else if (!show && existingBlur) {
            existingBlur.remove();
        }
    }
});
