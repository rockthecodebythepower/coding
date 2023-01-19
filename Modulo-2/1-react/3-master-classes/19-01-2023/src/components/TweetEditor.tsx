type Props = {
  text: string;
  setText: (arg: string) => void;
  setImageUrl: (arg: string) => void;
};

const TweetEditor = ({ text, setText, setImageUrl }: Props) => {
  return (
    <div>
      <textarea
        id="tweet-text"
        name="tweet-text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      <input
        type="file"
        name="tweet-image"
        id="tweet-image"
        onChange={(event) => {
          const file = event.target.files?.[0];
          const reader = new FileReader();

          reader.addEventListener(
            'load',
            () => {
              setImageUrl(reader.result as string || '')
            },
            false
          );

          if (file) {
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
  );
};

export default TweetEditor;
