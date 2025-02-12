let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    
    if (hours >= 0 && hours <10) {
        speak("Good morning sir");
    } else if (hours >= 10 && hours < 4) {
        speak("Good afternoon sir");
    } else {
        speak("Good evening sir");
    }
}

//window.addEventListener('load', () => {
  //  wishMe();
//});


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();


recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;

    
    takeCommand(transcript);
};


btn.addEventListener("click", () => {
    recognition.start();
});

function takeCommand(message) {
    let lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hey") || lowerCaseMessage.includes("hi")) {
        speak("Hello sir, what can I help you?");
    }
    else if (lowerCaseMessage.includes("who are you") || lowerCaseMessage.includes("what is your name")) {
        speak("I am a virtual assistant, created by Afzal Balghari.");
    } 
    else if (lowerCaseMessage.includes("how are you")) {
        speak("I'm good , what's about you");
    }
    else if (lowerCaseMessage.includes("i love you")) {
        speak("sorry, i have a boy friend");
    }
    else if(lowerCaseMessage.includes("you have a boyfriend")){
        speak("yes, I have a boyfriend")
    }
    else if (lowerCaseMessage.includes("i miss you")) {
        speak("i miss you too, and i love you so much, balghari");
    }
    else if (lowerCaseMessage.includes("who is your boyfriend")|| lowerCaseMessage.includes("who is")) {
        speak("his name is Afzal balghari");
    }
    else if (lowerCaseMessage.includes("do you love me")) {
        speak("sorry, i love one person and he is Afzal balghari");
    }
    
    else if (lowerCaseMessage.includes("what is your age frishUP? ")) {
        speak("i was build at 8 octuber 2024");
    }

    else if (lowerCaseMessage.includes("afzal is cute?")) {
        speak("yes, he is so cute");
    }
    else if (lowerCaseMessage.includes("Tum kon Ho")) {
        speak("mara naam freshUp hai, aur muja sir afzal na banaya hai");
    }
    else if (lowerCaseMessage.includes("open youtube")) {
        speak("Opening YouTube.");
        window.open("https://www.youtube.com/");
    } 
    else if (lowerCaseMessage.includes("open facebook")) {
        speak("Opening Facebook.");
        window.open("https://www.facebook.com/");
    } 
    else if (lowerCaseMessage.includes("open instagram")) {
        speak("Opening Instagram.");
        window.open("https://www.instagram.com/");
    } 
    else if (lowerCaseMessage.includes("open google")) {
        speak("Opening Google.");
        window.open("https://www.google.com/");
    } 
    else if (lowerCaseMessage.includes("open whatsapp")) {
        speak("Opening WhatsApp Web.");
        window.open("https://web.whatsapp.com/");
    } 
    else if (lowerCaseMessage.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak('The time is ${time}');
    } 
    else if (lowerCaseMessage.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak('Todays date is ${date}');
    } 
    else {
        let finalText = `Here is what I found on the internet regarding ${lowerCaseMessage.replace("fresh", "") || lowerCaseMessage.replace("up", "")}`;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${lowerCaseMessage.replace("fresh", "") || lowerCaseMessage.replace("up", "")}`, "_blank");
    }
    
    
}