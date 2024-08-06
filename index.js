function shout(shout) {
    return shout.toUpperCase();
}

function whisper(whisper) {
    return whisper.toLowerCase();
}

function logShout(logShout) {
    console.log(logShout.toUpperCase())
}

function logWhisper(logWhisper) {
    console.log(logWhisper.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
    }
    if (string.toUpperCase() === string) {
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}