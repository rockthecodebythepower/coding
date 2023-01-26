import { useEffect, useState } from 'react';
import {
  TweetAvatar,
  TweetDataGrayText,
  TweetImage,
  TweetTextContent,
  TweetUserData,
  TweetViewContainer,
} from '../ui/TweetView';

type Props = {
  text: string;
  imageUrl: string;
  avatar: string;
  username: string;
  handle: string;
  linkTo: string;
};

const TweetViewer = (props: Props) => {
  const [metadataImage, setMetadataImage] = useState<string>('');

  const renderTextWithLinks = (text: string) => {
    return text.split('\n').map((subtext, index) => {
      return (
        <p key={index}>
          {subtext.split(' ').map((textElement) => {
            const isLink = textElement.includes('https://') || textElement.includes('http://');

            if (isLink) {
              return (
                <>
                  <a href={textElement}>{textElement}</a>{' '}
                </>
              );
            } else {
              return textElement + ' ';
            }
          })}
        </p>
      );
    });
  };

  const loadMetadata = () =>
    fetch(`https://jsonlink.io/api/extract?url=${props.linkTo}`)
      .then((res) => res.json())
      .then((response) => {
        setMetadataImage(response.images[0] || '');
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <>
      <TweetViewContainer>
        <article>
          <TweetAvatar src={props.avatar} alt="avatar" />
        </article>

        <article>
          <TweetUserData>
            <b>{props.username}</b>
            <TweetDataGrayText>@{props.handle}</TweetDataGrayText>
            <TweetDataGrayText>·</TweetDataGrayText>
            <TweetDataGrayText>18 Jun.</TweetDataGrayText>
          </TweetUserData>

          <TweetTextContent id="tweet-text-content">{renderTextWithLinks(props.text)}</TweetTextContent>
          {props.imageUrl ? <TweetImage id="tweet-image-content" src={props.imageUrl} alt="tweet-image" /> : null}
          {metadataImage ? (
            <a href={props.linkTo} target="_blank" rel="noopener">
              <TweetImage id="tweet-metadata-image" src={metadataImage} alt="tweet-image" />
            </a>
          ) : null}
        </article>
      </TweetViewContainer>

      {props.linkTo ? (
        <div>
          <button onClick={loadMetadata}>Cargar metadata del link</button>
        </div>
      ) : null}
    </>
  );
};

export default TweetViewer;
