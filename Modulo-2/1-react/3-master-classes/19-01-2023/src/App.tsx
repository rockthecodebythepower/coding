import { useState } from 'react';
import TweetEditor from './components/TweetEditor';
import TweetViewer from './components/TweetViewer';
import { MainLayoutUI } from './ui/Layout';

function App() {
  const [tweetText, setTweetText] = useState<string>('hola soy el texto de un tweet');
  const [tweetImage, setTweetImage] = useState<string>('');

  return (
    <MainLayoutUI>
      <TweetEditor text={tweetText} setText={setTweetText} setImageUrl={setTweetImage} />
      <TweetViewer text={tweetText} imageUrl={tweetImage} />
    </MainLayoutUI>
  );
}

export default App;
