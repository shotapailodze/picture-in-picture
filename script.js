const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt User To Select Media Stream, Pass to Video Element, Then Play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log('oops', err);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start PnP
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
    
});

// On Load
selectMediaStream()