
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJDg-RvOq5u0RCRHJmk6nMzp5F9jDK9vAa86BYu7umpP36WGcqDiK49BMMaYe567W4/exec';
    const form = document.forms["sheet"];
    const modal = document.getElementById('myModal');

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                modal.style.display = 'block';
            })
            .catch(error => console.error('Error!', error.message));
    });

    function closeModal() {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

