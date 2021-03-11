import React, {useState} from "react";
import TweeterList from "./TweeterList";
import TweeeterForm from "./TweeterForm";
import {v4 as uuid4} from "uuid";
import {listoftweeters} from "./data";
import './App.css';

function App() {
  const [tweeters, setTweeters] = useState(listoftweeters);

  const completeTweeter = (id) => {
    const temporaryTweeters = [...tweeters];
    const index = temporaryTweeters.findIndex((tweeter) => tweeter.id === id);
    temporaryTweeters[index].isCompleted = !temporaryTweeters[index].isCompleted;
    setTweeters(temporaryTweeters);
  };

  //edit tweeter
  const editTweeter = (id, text) => {
    const temporaryTweeters = [...tweeters];
    const index = temporaryTweeters.findIndex((tweeter) => tweeter.id === id);
    temporaryTweeters[index].text = text;
    setTweeters(temporaryTweeters);
  };

  //add tweeter
  const addTweeter = (msg) => {
    const newTweeter = [...tweeters, 
      {
        id: uuid4(),
        text: msg,
        name: msg,
        isCompleted: false
      }
    ];
    setTweeters(newTweeter);
  };

  //delete tweeter
  const deleteTweeter = (id) => {
    const temporaryTweeters = [...tweeters];
    const newTweeters = temporaryTweeters.filter((tweeter) => tweeter.id !== id);
    setTweeters(newTweeters)
  };

  return (
    <>
      
      <TweeeterForm addTweeter={addTweeter} />
      <TweeterList
          tweeters={tweeters}
          completeTweeter={completeTweeter}
          editTweeter={editTweeter}
          deleteTweeter={deleteTweeter}
      />

    </>
  );
}

export default App;
