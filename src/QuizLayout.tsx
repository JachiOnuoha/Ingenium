/* This React Component manages the layout and display of the images and questions for the quiz */

import React, { useState, useEffect } from 'react';
import firebaseApp from './firebase'
import { getStorage, getDownloadURL, ref} from "firebase/storage";

export const ImageLayout: React.FC = () => {
    const [questionText, setQuestionText] = useState<String>();
    const [imageURL, setImageURL] = useState<string>('');

    // const imageUrl: string = require('./Eday.jpg');

    // Create reference to the storage database and get a child reference to a specific file
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage);
    const fileRef = ref(storageRef, 'CompEng.jpg');

    // Asynchronously query the database to get the image url for the specified reference 
    useEffect(()=>{
        const getImages = async() => {
            // Update imageURL state
            setImageURL(await getDownloadURL(fileRef))
        }
        getImages();
    }, []);

    return(
        <div>
            <img alt='Ingenium alt text' style={{width: 100, height: 100 }} src={imageURL}></img>
        </div>
    );
}

