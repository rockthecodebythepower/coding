import { useState } from 'react';
import TweetEditor from './components/TweetEditor';
import TweetViewer from './components/TweetViewer';
import { MainLayoutUI } from './ui/Layout';

function App() {
  const [tweetText, setTweetText] = useState<string>('hola soy el texto de un tweet');
  const [tweetImage, setTweetImage] = useState<string>('');
  const [tweetAvatar, setTweetAvatar] = useState<string>('');
  const [tweetUsername, setTweetUsername] = useState<string>('username');
  const [tweetHandle, setTweetHandle] = useState<string>('user handle');
  const [tweetLinkTo, setTweetLinkTo] = useState<string>('');

  return (
    <MainLayoutUI>
      <TweetEditor
        username={tweetUsername}
        setUsername={setTweetUsername}
        handle={tweetHandle}
        setHandle={setTweetHandle}
        setAvatar={setTweetAvatar}
        text={tweetText}
        setText={setTweetText}
        setImageUrl={setTweetImage}
        linkTo={tweetLinkTo}
        setLinkTo={setTweetLinkTo}
      />

      <TweetViewer
        text={tweetText}
        imageUrl={tweetImage}
        avatar={tweetAvatar}
        username={tweetUsername}
        handle={tweetHandle}
        linkTo={tweetLinkTo}
      />
    </MainLayoutUI>
  );
}

export default App;
