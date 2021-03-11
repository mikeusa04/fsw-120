import Tweeter from "./Tweeter";

function TweeterList({ tweeters, completeTweeter, editTweeter, deleteTweeter}) {
    console.log(tweeters);

    const listTweeters = tweeters.map((tweeter) => {
        return(
            <Tweeter
               key={tweeter.id}
               tweeter={tweeter}
               completeTweeter={completeTweeter}
               editTweeter={editTweeter}
               deleteTweeter={deleteTweeter}
            />   
        );
    });
    return(
        <>
          <ul>{listTweeters}</ul>
        </>
    );
}

export default TweeterList;