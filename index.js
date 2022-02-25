let video = null;
async function init() {
    try {
        const srcObject = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        video = createVideo();
        video.srcObject = srcObject;
        document.body.appendChild(video);
        return true
    } catch (e) {
        console.error(e)
    }
}


function createVideo() {
    const video = document.createElement("video");
    video.id = "selfieVideo";
    video.style.width = "400";
    video.style.height = "800";
    video.style.webkitTransform = "scaleX(-1);";
    video.style.transform = "scaleX(-1)";
    video.autoplay = true;
    return video;
}

function snap() {
    const {videoWidth, videoHeight} = {videoWidth:400, videoHeight:800};
    const canvas = document.createElement("canvas");
    canvas.width = videoWidth;
    canvas.height = videoHeight;
    const context = canvas.getContext("2d");
    const drawImageParameters = this.generateDrawImageParameters(canvas, videoWidth, videoHeight);
    context.scale(-1, 1);
    context.drawImage(video, ...drawImageParameters);
    const imageBase64 = canvas.toDataURL("image/png");
    return imageBase64
}

function generateDrawImageParameters(canvas, videoWidth, videoHeight) {
    if (videoWidth < videoHeight) return [0, 0, canvas.width, canvas.height, 0, 0, canvas.width * -1, canvas.height];
    return [Math.floor((videoWidth - canvas.width) / 2), 0, canvas.width, videoHeight, 0, 0, canvas.width * -1, videoHeight]
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
