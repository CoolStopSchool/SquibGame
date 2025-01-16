const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const lang = {
    Maintitle: "Squib Games",
    Playbutton: "PLAY",
    Players1: "PLAYERS: 1",
    players2: "PLAYERS: 2",
    Players3: "PLAYERS: 3",
    Players4: "PLAYERS: 4",
    Season1: "SEASON I",
    Season2: "SEASON II",
}
const screen = {
    width: 1920,
    height: 1080,
    h1: "100px sans-serif",
    h2: "85px sans-serif",
    h3: "60px sans-serif",
    h4: "45px sans-serif",
    h5: "30px sans-serif",
    p: "15px sans-serif"
}
if(canvas.getContext) {
    ctx.canvas.width = 1920;
    ctx.canvas.height = 1080;
    window.addEventListener("load", main);
} else {
    alert("Browser unsupported")
}

function main() {
    try {
        setup()
        let frame = 0;
        setInterval(() => {
            frame++;
            loop(frame);
        }, 10 )

    





    } catch(err) {
        alert(err);
    }
}

function setup() {
    drawCenteredText2(0, 0, screen.width, screen.height / 6, lang.Maintitle, screen.h1, "black")
}

function loop(frame) {
    drawTextBox((screen.width / 2) - (screen.width / 4), (screen.height / 2) - (screen.height / 8), (screen.width / 2), (screen.height / 8), "PLAY", screen.h3, "pink", "black")
    drawTextBox((screen.width / 2) - (screen.width / 4), (screen.height / 2), (screen.width / 2), (screen.height / 8), "PLAYERS: 2", screen.h3, "lightblue", "black")
    drawTextBox((screen.width / 2) - (screen.width / 4), (screen.height / 2) + (screen.height / 8), (screen.width / 2), (screen.height / 8), "SEASON 1", screen.h3, "yellow", "black")

    
    //drawTextBox(500, 500, 1000, 1000, Math.round(frame / 60), "50px serif" , "white", "black")
}