let video = null;
let videoSize = {};
let isMobile;

async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        let {width, height} = stream.getTracks()[0].getSettings();
        isMobile= width>height
        videoSize.width = width
        videoSize.height = height
        video = createVideo();
        video.srcObject = stream;
        document.body.appendChild(video);
        return true
    } catch (e) {
        console.error(e)
    }
}

function createVideo() {
    const video = document.createElement("video");
    video.id = "selfieVideo";
    video.style.webkitTransform = "scaleX(-1);";
    video.style.transform = "scaleX(-1)";
    video.autoplay = true;
    return video;
}

function snap() {
    const canvas = document.createElement("canvas");
    canvas.width = videoSize.width;
    canvas.height = videoSize.height;
    const context = canvas.getContext("2d");
    const drawImageParameters = this.generateDrawImageParameters(canvas, canvas.width, canvas.height);
    console.log(drawImageParameters)
    context.scale(-1, 1);
    context.drawImage(video, ...drawImageParameters);
    const imageBase64 = canvas.toDataURL("image/png");
    return imageBase64
}

function generateDrawImageParameters(canvas, videoWidth, videoHeight) {
    if (isMobile) return [0, 0, videoWidth, videoHeight, 0, 0, -videoWidth, videoHeight];

    // if (isMobile) return [0, 0, canvas.width, canvas.height, 0, 0, canvas.width * -1, canvas.height];
    return [0, 0, videoWidth, videoHeight, 0, 0, -videoWidth, videoHeight]
}


function createSelfieVideo() {
    const video = document.createElement("video");
    video.id = "selfieVideo";
    video.style.width = "300px";
    video.style.height = "300px";
    video.style.clipPath = "circle(37%)";
    video.style.webkitTransform = "scaleX(-1);";
    video.style.transform = "scaleX(-1)";
    video.autoplay = true;
    return video;
}
