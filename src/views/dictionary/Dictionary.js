import React, { useState } from 'react'
import axios from 'axios';
import { Container } from 'reactstrap';
// import Mic from './Mic';
// import MicIcon from "@material-ui/icons/Mic";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Header from './Header';
import Translation from './Translation';

function Dictionary() {

    const [Meanings, setMeanings] = useState([]);
    const [word, setword] = useState("");
    const [category, setcategory] = useState("en_US");
    

    const handleOnclick= () => {
        dictionaryAPI();
    }

    const handleOnchange = (e) => {
        console.log("e.target.value",e.target.value);
        setcategory(e.target.value)
    }

    const dictionaryAPI = async ()=>{
        try{
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
            setMeanings(data.data)
        }
        catch(error){
            console.log(error);
        }
    }

    // if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    //     return null;
    // }

    // const {transcript} = useSpeechRecognition();
    
    return (
        <div className="header">
           <Container>
                <Header onChange={handleOnchange} word={word} setword={setword} handleOnclick={handleOnclick}></Header>
                {Meanings ? <Translation word={word} meanings={Meanings}></Translation> : null }
           </Container>
        </div>
    )
}

export default Dictionary
