const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt
    event.preventDefault();
    // Store the event for later use
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Prompt the user to install the PWA
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);   
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the installation event
    console.log('App installed successfully!');
    window.deferredPrompt = null;   
});
