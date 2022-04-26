/* This React Component manages the layout and display of the images and questions for the quiz */

import React, { useState, useEffect } from 'react';
import firebaseApp from './firebase'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";

export const ImageLayout: React.FC = () => {
  const [questionText, setQuestionText] = useState<String>();
  const [imageURL0, setImageURL0] = useState<string>('');
  const [imageURL1, setImageURL1] = useState<string>('');
  const [imageURL2, setImageURL2] = useState<string>('');
  const [imageURL3, setImageURL3] = useState<string>('');
  const [imageURL4, setImageURL4] = useState<string>('');
  const [imageURL5, setImageURL5] = useState<string>('');
  const [imageURL6, setImageURL6] = useState<string>('');
  const [imageURL7, setImageURL7] = useState<string>('');

  const imageUrl: string = require('./Eday.jpg');
  const imageUrl1: string = require('./UK-Logo.jpg');

  // Create reference to the storage database and get a child reference to a specific file
  const storage = getStorage(firebaseApp);
  const storageRef = ref(storage);
  const fileRef0 = ref(storageRef, 'Biomedical.jpg');
  const fileRef1 = ref(storageRef, 'electrical-engineering-banner1600.jpg');
  const fileRef2 = ref(storageRef, 'Electrical engineering(1).jpg');
  const fileRef3 = ref(storageRef, 'Mechanical.JPG');
  const fileRef4 = ref(storageRef, 'mechanical_lead.jpg');
  const fileRef5 = ref(storageRef, 'Mining.jpeg');
  const fileRef6 = ref(storageRef, 'ComputerScience.jpg');
  const fileRef7 = ref(storageRef, 'Miningengineering.jpg');

  // Asynchronously query the database to get the image url for the specified reference 
  useEffect(() => {
    const getImages = async () => {
      // Update imageURL state
      setImageURL0(await getDownloadURL(fileRef0));
      setImageURL1(await getDownloadURL(fileRef1));
      setImageURL2(await getDownloadURL(fileRef2));
      setImageURL3(await getDownloadURL(fileRef3));
      setImageURL4(await getDownloadURL(fileRef4));
      setImageURL5(await getDownloadURL(fileRef5));
      setImageURL6(await getDownloadURL(fileRef6));
      setImageURL7(await getDownloadURL(fileRef7));
    }
    getImages();
  }, []);


  // const firestoreDB = getFirestore(firebaseApp);
  // const questionRef = doc(firestoreDB, 'Questions', "Q1");
  // const questionSnap = getDoc(questionRef);

  // if(questionSnap != null){
  //   console.log(questionSnap.data());
  // }

  return (
    <div>
      <BuzzFeedQuiz
        title={"Ingenium Questionnaire"}
        description={"What Engineering Discipline is best for you?"}
        byline={false}
        autoScroll={false}
        // onRestart={() =>
        //   alert("This alert was triggered by the onRestart prop!")
        // }
        // onResult={() => alert("The onResult prop triggered this alert!")}
        // onAnswerSelection={(questionIndex, answerIndex, resultID) =>
        //   console.log({
        //     questionIndex,
        //     answerIndex,
        //     resultID,
        //   })
        // }
        facebookShareButton={false}
        twitterShareButton={false}
        copyShareButton={false}
        questions={[
          {
            question: "Which of these do you find most interesting?",
            // questionRelativeToImage: "overlap",
            // answerArrangement: "tile",
            backgroundColor: "rgb(0,51,160)",
            imageAttribution: "Photo by Maria Orlova from Pexels",
            answers: [
              {
                answer: "Engineering Images",
                resultID: 0,
                backgroundImageSrc: imageURL0,
                imageAttribution: "Photo by Pixabay from Pexels",
              },
              {
                answer: "Engineering Images",
                resultID: 0,
                backgroundImageSrc: imageURL1,
                backgroundColor: "rgb(238,243,247)",
                fontColor: "rgb(53,51,48)",
              },
              {
                answer: "Engineering Images",
                resultID: 1,
                backgroundImageSrc: imageURL2,
                backgroundColor: "rgb(238,243,247)",
                fontColor: "rgb(53,51,48)",
              },
              {
                answer: "Engineering Images",
                resultID: 1,
                backgroundImageSrc: imageURL3,
                backgroundColor: "rgb(238,243,247)",
                fontColor: "rgb(53,51,48)",
              },


              // {
              //   answer: "are",
              //   resultID: 2,
              //   backgroundImageSrc: imageURL4,
              //   backgroundColor: "rgb(238,243,247)",
              //   fontColor: "rgb(53,51,48)",
              // },
              // {
              //   answer: "all",
              //   resultID: 2,
              //   backgroundImageSrc: imageURL5,
              //   backgroundColor: "rgb(238,243,247)",
              //   fontColor: "rgb(53,51,48)",
              // },
              // {
              //   answer: "tiled",
              //   resultID: 2,
              //   backgroundImageSrc: imageURL6,
              //   backgroundColor: "rgb(238,243,247)",
              //   fontColor: "rgb(53,51,48)",
              // },
              // {
              //   answer: "Click here to trigger an answer response!",
              //   resultID: 1,
              //   backgroundImageSrc: imageURL7,
              //   backgroundColor: "rgb(238,243,247)",
              //   fontColor: "rgb(53,51,48)",
              //   revealResponse: {
              //     title: (
              //       <>
              //         <h3 className="rbq_question_response_title">
              //           {console.log('Got called')}
              //           Here's an answer response!
              //         </h3>
              //       </>
              //     ),
              //     description:
              //       "Trigger your own answer response by setting an answer's revealResponse key. You can set a title and description value (either of which can be a string or a JSX element). You can also set an image and an image attribution statement.",
              //     image: imageUrl,
              //     imageAttribution: "Via Pexels",
              //   },
              // },
            ],
          },

          
          {
            question: "Which one of these activities do you enjoy now or as a child: ",
            questionRelativeToImage: "adjacent",
            imageAttribution: "Photo by University of Kentucky National Society of Black Engineers",
            answerArrangement: "row",
            backgroundImageSrc: imageUrl,
            answers: [
              {
                answer: "Playing video games/electronics",
                resultID: 0,
              },
              {
                answer: "Building things with legos ",
                resultID: 0,
              },
              {
                answer: "Playing with Tonka trucks",
                resultID: 1,
              },
              {
                answer: "Building robotic toys",
                resultID: 1,
              },
              {
                answer: "Experiment with chemicals for science projects",
                resultID: 2,
              },
            ],
          },

          {
            question: "Where would you like to work?",
            // questionRelativeToImage: "overlap",
            // answerArrangement: "tile",
            // backgroundImageSrc: imageURL,
            backgroundColor: "rgb(0,51,160)",
            imageAttribution: "University of Kentucky College of Engineering Department",
            answers: [
              {
                answer: "Engineering Image",
                resultID: 0,
                backgroundImageSrc: imageURL4,
                imageAttribution: "",
              },
              {
                answer: "Engineering Image",
                resultID: 0,
                backgroundImageSrc: imageURL5,
                backgroundColor: "rgb(238,243,247)",
                fontColor: "rgb(53,51,48)",
              },
              {
                answer: "Engineering Image",
                resultID: 1,
                backgroundImageSrc: imageURL6,
                backgroundColor: "rgb(238,243,247)",
                fontColor: "rgb(53,51,48)",
              },
              {
                answer: "Engineering Image",
                resultID: 1,
                backgroundImageSrc: imageURL7,
                backgroundColor: "rgb(238,243,247)",
                fontColor: "rgb(53,51,48)",
              },
            ],
          },

          
        ]}
        results={[
          // {
          //   title: "This is one result title",
          //   description:
          //     "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
          //   resultImageSrc: imageUrl,
          //   imageAttribution: "Photo by Pixabay from Pexels",
          //   resultID: 0,
          // },
          // {
          //   title: "This is another result title",
          //   description:
          //     "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
          //   resultImageSrc: imageUrl,
          //   imageAttribution: "Photo by Tranmautritam from Pexels",
          //   resultID: 1,
          // },
          // {
          //   title: "Here's yet another result title",
          //   description:
          //     "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
          //   resultImageSrc: imageUrl,
          //   imageAttribution: "Photo by Pixabay from Pexels",
          //   resultID: 2,
          // },
        ]}
      />            {/* <img alt='Ingenium alt text' style={{width: 100, height: 100 }} src={imageURL}></img> */}
    </div>
  );
}

