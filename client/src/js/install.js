const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Done: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
    // Store the event for later use
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
    });
    // Done: Implement a click event handler on the `butInstall` element
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

// Done: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {  
  console.log('👍', 'appinstalled', event);
  console.log('App installed successfully!');
  window.deferredPrompt = null;
});
