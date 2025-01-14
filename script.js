const app = document.getElementById("app");

// Simulates typing effect
function typeWriter(text, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            app.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50); // Typing speed
}

// Page 1
function startLandingPage() {
    app.innerHTML = "";
    typeWriter("so hi...? how you doin? i kinda have been mean to tell you something, will you hear it?", () => {
        const button = document.createElement("button");
        button.innerText = "yes, tell me plz";
        button.onclick = showConfession;
        app.appendChild(button);
    });
}

// Page 2
function showConfession() {
    app.innerHTML = "";
    const texts = [
        "im not great at saying these things face-to-face, so... i thought i'd try this instead.... i.... ive been thinking about you a lot lately.",
        "you know, i’ve been holding back these feelings for quite some time...",
        // Add the rest of your confession text here...
        "so, would you let me? would you let me be the one who gets to call you mine?"
    ];

    let index = 0;

    function showNextText() {
        if (index < texts.length) {
            typeWriter(texts[index], () => {
                index++;
                showNextText();
            });
        } else {
            showFinalButtons();
        }
    }

    showNextText();
}

// Final buttons
function showFinalButtons() {
    const yesButton = document.createElement("button");
    yesButton.innerText = "yes";
    yesButton.onclick = () => {
        app.innerHTML = "you said yes...? omg, you’ve just made me the happiest person alive!";
    };

    const noButton = document.createElement("button");
    noButton.innerText = "no";
    noButton.onclick = () => {
        app.innerHTML = "i understand. thank you for listening to me, though. i really appreciate it.";
    };

    app.appendChild(yesButton);
    app.appendChild(noButton);
}

// Start the app
startLandingPage();
