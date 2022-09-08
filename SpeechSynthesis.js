const sdk = require("microsoft-cognitiveservices-speech-sdk");
const readline = require("readline");
require("dotenv").config();

"use strict";

const TextToSpeech = () => {

    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SECRET_KEY, process.env.REGION);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(process.env.AUDIO_FILE);

    speechConfig.speechSynthesisVoiceName = "es-PE-CamilaNeural";
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });


    rl.question("Ingresa el texto a procesar:\n> ", function (text) {

      rl.close();
      synthesizer.speakTextAsync(text,
      
      function (result) {

        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log("Procesamiento finalizado");
        } else {
          console.error("Error en el procesamiento");
        }

        synthesizer.close();
        synthesizer = null;
      
      },
      
      function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = null;
      });

      console.log("Texto procesado a: " + process.env.AUDIO_FILE);

    });
}


TextToSpeech();