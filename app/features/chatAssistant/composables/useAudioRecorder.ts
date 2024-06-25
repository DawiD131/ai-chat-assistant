import { computed, ref } from "vue";

export const useAudioRecorder = () => {
  let mediaRecorder: MediaRecorder;
  let chunks: BlobPart[] = [] as BlobPart[];

  const blob = ref<Blob>(new Blob());
  const isRecording = ref(false);

  if (navigator?.mediaDevices && navigator?.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          blob.value = new Blob(chunks, { type: "audio/wav" });

          chunks = [] as BlobPart[];
        };
      })
      .catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }

  const startRecording = () => {
    mediaRecorder.start();
    isRecording.value = true;
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    isRecording.value = false;
  };

  return {
    startRecording,
    stopRecording,
    isRecording: computed(() => isRecording.value),
    blob,
  };
};
