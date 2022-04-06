/* This React Component manages the layout and display of the images and questions for the quiz */

import React, { useState, useEffect } from 'react';
import firebaseApp from './firebase'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";

export const ImageLayout: React.FC = () => {
    const [questionText, setQuestionText] = useState<String>();
    const [imageURL, setImageURL] = useState<string>('');

    const imageUrl: string = require('./Eday.jpg');

    // Create reference to the storage database and get a child reference to a specific file
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage);
    const fileRef = ref(storageRef, 'CompEng.jpg');

    // Asynchronously query the database to get the image url for the specified reference 
    useEffect(() => {
        const getImages = async () => {
            // Update imageURL state
            setImageURL(await getDownloadURL(fileRef))
        }
        getImages();
    }, []);



    return (
        <div>
             <BuzzFeedQuiz
          title={"Sample Ingenium Questionnaire"}
          description={"Here it is, this is the demo."}
          byline={false}
          autoScroll={false}
          onRestart={() =>
            alert("This alert was triggered by the onRestart prop!")
          }
          onResult={() => alert("The onResult prop triggered this alert!")}
          onAnswerSelection={(questionIndex, answerIndex, resultID) =>
            console.log({
              questionIndex,
              answerIndex,
              resultID,
            })
          }
          facebookShareButton={false}
          twitterShareButton={false}
          copyShareButton={false}
          questions={[
            {
              question: "Here's a default question",
              answers: [
                {
                  answer: "Backgrounds are black",
                  resultID: 0,
                },
                {
                  answer: "Fonts are white",
                  resultID: 0,
                },
                {
                  answer: "arranged",
                  resultID: 1,
                },
                {
                  answer: "as tiles",
                  resultID: 2,
                },
              ],
            },
            {
              question: "Let's add some background and font colors",
              backgroundColor:
                "linear-gradient(204deg, rgba(154,172,255,1) 40%, rgba(167,68,222,1) 100%)",
              fontColor: "#000",
              answers: [
                {
                  answer: "A",
                  backgroundColor:
                    "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                  fontColor: "#fff",
                  resultID: 0,
                },
                {
                  answer: "grid",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(118,72,193,1) 45%, rgba(192,48,132,1) 100%)",
                  fontColor: "#FFD700",
                  resultID: 0,
                },
                {
                  answer: "is",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(77,104,215,1) 35%, rgba(163,49,163,1) 100%)",
                  fontColor: "#fff",
                  resultID: 0,
                },
                {
                  answer: "shown",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(196,52,119,1) 35%, rgba(233,88,77,1) 100%)",
                  fontColor: "#fff",
                  resultID: 1,
                },

                {
                  answer: "when",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(175,37,150,1) 35%, rgba(223,80,86,1) 100%)",
                  fontColor: "#FFD700",
                  resultID: 1,
                },
                {
                  answer: "there",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(122,62,190,1) 35%, rgba(196,55,126,1) 100%)",
                  fontColor: "#fff",
                  resultID: 1,
                },
                {
                  answer: "are",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(231,97,90,1) 35%, rgba(251,187,88,1) 100%)",
                  fontColor: "#fff",
                  resultID: 2,
                },
                {
                  answer: ">= 9",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(201,65,112,1) 35%, rgba(240,122,80,1) 100%)",
                  fontColor: "#FFD700",
                  resultID: 2,
                },
                {
                  answer: "choices",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(166,59,171,1) 35%, rgba(206,72,106,1) 100%)",
                  fontColor: "#fff",
                  resultID: 2,
                },
              ],
            },
            {
              question: "Here is some overlapping image text",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              backgroundImageSrc: imageURL,
              imageAttribution: "Photo by Maria Orlova from Pexels",
              answers: [
                {
                  answer: "Here's a cat photo",
                  resultID: 0,
                  backgroundImageSrc: imageUrl,
                  imageAttribution: "Photo by Pixabay from Pexels",
                },
                {
                  answer: "No cat photo here, though",
                  resultID: 0,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                },
                {
                  answer: "These",
                  resultID: 1,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                },
                {
                  answer: "answers",
                  resultID: 1,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                },
                {
                  answer: "are",
                  resultID: 2,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                },
                {
                  answer: "all",
                  resultID: 2,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                },
                {
                  answer: "tiled",
                  resultID: 2,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                },
                {
                  answer: "Click here to trigger an answer response!",
                  resultID: 1,
                  backgroundColor: "rgb(238,243,247)",
                  fontColor: "rgb(53,51,48)",
                  revealResponse: {
                    title: (
                      <>
                        <h3 className="rbq_question_response_title">
                          {console.log('Got called')}
                          Here's an answer response!
                        </h3>
                      </>
                    ),
                    description:
                      "Trigger your own answer response by setting an answer's revealResponse key. You can set a title and description value (either of which can be a string or a JSX element). You can also set an image and an image attribution statement.",
                    image: imageUrl,
                    imageAttribution: "Via Pexels",
                  },
                },
              ],
            },
            {
              question: "Here is some adjacent image text",
              questionRelativeToImage: "adjacent",
              imageAttribution: "Photo by Anel Rossouw from Pexels",
              answerArrangement: "row",
              backgroundImageSrc: imageURL,
              answers: [
                {
                  answer: "These",
                  resultID: 0,
                },
                {
                  answer: "answers",
                  resultID: 0,
                },
                {
                  answer: "are in a",
                  resultID: 1,
                },
                {
                  answer: "row",
                  resultID: 1,
                },
                {
                  answer: "configuration.",
                  resultID: 2,
                },
              ],
            },

            {
              question: "Answers can also trigger a callback function",
              answers: [
                {
                  answer: "Cb ➡️",
                  resultID: 0,
                },
                {
                  answer: "Click for answer function",
                  onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                    alert(
                      `This alert is caused by an answer selection!\n\nThe onAnswerSelection prop takes an optional callback function with the question's index, selected answer index, and associated result ID as parameters.\n\nCheck out the console to see these parameters in action!\n\n*** Keep in mind that the onAnswerSelection prop on specific answers supersedes ReactBuzzFeedQuiz's general onAnswerSelection prop, so the parameters for this particular question selection won't show up in the console but here instead:\n\n{questionIndex: ${questionIndex}, answerIndex: ${answerIndex}, resultID: ${resultID}}`
                    ),
                  resultID: 1,
                },
                {
                  answer: "⬅️ Cb",
                  resultID: 2,
                },
              ],
            },
            {
              question:
                "Select a final answer to trigger a result callback function",
              answers: [
                {
                  answer: "Thanks",
                  resultID: 0,
                },
                {
                  answer: "for",
                  resultID: 0,
                },
                {
                  answer: "checking",
                  resultID: 1,
                },
                {
                  answer: "the",
                  resultID: 1,
                },
                {
                  answer: "demo",
                  resultID: 2,
                },
                {
                  answer: "out!",
                  resultID: 2,
                },
              ],
            },
          ]}
          results={[
            {
              title: "This is one result title",
              description:
                "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
              resultImageSrc: imageUrl,
              imageAttribution: "Photo by Pixabay from Pexels",
              resultID: 0,
            },
            {
              title: "This is another result title",
              description:
                "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
              resultImageSrc: imageUrl,
              imageAttribution: "Photo by Tranmautritam from Pexels",
              resultID: 1,
            },
            {
              title: "Here's yet another result title",
              description:
                "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
              resultImageSrc: imageUrl,
              imageAttribution: "Photo by Pixabay from Pexels",
              resultID: 2,
            },
          ]}
        />            {/* <img alt='Ingenium alt text' style={{width: 100, height: 100 }} src={imageURL}></img> */}
        </div>
    );
}

