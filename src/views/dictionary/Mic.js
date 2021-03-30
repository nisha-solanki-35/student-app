import React, { useEffect } from 'react'
import MicIcon from "@material-ui/icons/Mic";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Mic() {

    useEffect(() => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
          alert("Ups, your browser is not supported!");
        }  
      }, []);
    
    const {transcript} = useSpeechRecognition();
    return (
        <div>
        <h1>Text : {transcript ? transcript : 'Start listening for transcript'}</h1>
                <button onClick={SpeechRecognition.startListening}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
    )
}

export default Mic
