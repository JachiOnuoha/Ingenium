/* This React Component manages the layout and display of the images and questions for the quiz */

import React, { useState } from 'react';
import firebase from '../firebase/firebase'
import { getDocs, getFirestore, collection } from "firebase/firestore";

export const ImageLayout: React.FC = () => {
    const [questionText, setQuestionText] = useState<String>();

    const imageUrl: string = require('./Eday.jpg');
    const firestoreDB = getFirestore(firebase);
    
    // The code below is intended to query the firestore database and access the Questions collection 
    // At moment it is not complete however it should be an async/await function


    // const sampleData = async () => await getDocs(collection(firestoreDB, "Questions"));

    return(
        <div>
            <img alt='Two Engineers' style={{width: 100, height: 100 }} src={imageUrl}></img>
        </div>
    );
}

