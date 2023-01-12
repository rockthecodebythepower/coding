import { memo } from 'react';

import A from '../components-ui/A';
import Div from '../components-ui/Div';
import P from '../components-ui/P';
import theme from '../src/theme';

const TabBar = ({ show }) => {
  return (
    <Div
      position="fixed"
      bottom="0"
      display="flex"
      justify="space-evenly"
      backgroundColor={theme.background}
      width="100vw"
      height="4rem"
      padding="0.5rem"
    >
      <A onClick={() => show(true)}>
        <Div display="flex" dir="column" justify="center" align="center">
          <Div>
            <svg
              width="28"
              height="28"
              fill="none"
              className="Icon  Icon--white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 23"
              name="tb-home-active"
            >
              <path fill="#fff" d="M0 0h23v23H0z"></path>
              <path
                d="M2.011 8.4l2.197-6.2c0-.1.2-.2.3-.2h14.08c.1 0 .2.1.3.2l2.097 6.2v.2c-.3.2-.5.5-.699.7-.3.4-.4.4-.6.4-.199 0-.299-.1-.598-.4-.4-.4-.999-1.1-2.097-1.1-1.099 0-1.698.6-2.098 1.1-.299.4-.399.4-.599.4-.2 0-.3-.1-.599-.4-.4-.4-.998-1.1-2.097-1.1-1.098 0-1.797.7-2.197 1.1-.3.4-.4.4-.599.4-.2 0-.3-.1-.6-.4-.399-.4-.998-1.1-2.096-1.1-1.099 0-1.698.7-2.097 1.1-.3.4-.4.4-.6.4-.2 0-.3-.1-.599-.4-.2-.2-.5-.5-.799-.7v-.2zM9.6 20.9v-4.5c0-1 .8-1.7 1.798-1.7h.3c.998 0 1.698.8 1.698 1.7v4.5H9.6z"
                fill="#00FFE0"
                fillOpacity="0.25"
              ></path>
              <path
                d="M22.883 7.7l-2.197-6.2c-.3-.9-1.199-1.5-2.098-1.5H4.508C3.509 0 2.71.6 2.31 1.5L.114 7.7c-.3 1 0 2 .799 2.5l.4.4c.1.2.299.4.598.5v6.3c0 3 2.397 5.5 5.293 5.5h8.788c2.896 0 5.293-2.4 5.293-5.5v-6.3c.2-.2.4-.4.599-.5l.4-.4c.599-.5.898-1.5.599-2.5zM2.01 8.4l2.197-6.2c0-.1.2-.2.3-.2h14.08c.1 0 .2.1.3.2l2.097 6.2v.2c-.3.2-.5.5-.699.7-.3.4-.4.4-.6.4-.199 0-.299-.1-.598-.4-.4-.4-.999-1.1-2.097-1.1-1.099 0-1.698.6-2.098 1.1-.3.4-.399.4-.599.4-.2 0-.3-.1-.599-.4-.4-.4-.998-1.1-2.097-1.1-1.098 0-1.797.7-2.197 1.1-.3.4-.4.4-.6.4-.199 0-.299-.1-.598-.4-.4-.4-.999-1.1-2.097-1.1-1.099 0-1.698.7-2.097 1.1-.3.4-.4.4-.6.4-.2 0-.3-.1-.599-.4-.2-.2-.5-.5-.799-.7v-.2zM9.6 20.9v-4.5c0-1 .799-1.7 1.797-1.7h.3c.999 0 1.698.8 1.698 1.7v4.5H9.6zm6.291 0h-.5v-4.5c0-2.1-1.697-3.7-3.694-3.7h-.3c-2.097 0-3.794 1.7-3.794 3.7v4.5h-.4c-1.797 0-3.295-1.6-3.295-3.5v-5.8c.799-.1 1.298-.7 1.598-1 .3-.4.399-.4.599-.4.2 0 .3.1.599.4.4.4.998 1.1 2.097 1.1 1.098 0 1.698-.6 2.097-1.1.3-.4.4-.4.6-.4.199 0 .299.1.598.4.4.4.999 1.1 2.098 1.1 1.098 0 1.697-.6 2.097-1.1.3-.4.399-.4.599-.4.2 0 .3.1.599.4.3.4.799.9 1.598 1v5.8c.1 2-1.398 3.5-3.196 3.5z"
                fill="#13C1AC"
              ></path>
            </svg>
          </Div>
          <P>Inicio</P>
        </Div>
      </A>
      <A onClick={() => show(true)}>
        <Div display="flex" dir="column" justify="center" align="center">
          <Div>
            <svg
              width="28"
              height="28"
              fill="none"
              className="Icon  Icon--white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 23"
              name="tb-favorites"
            >
              <path fill="#fff" d="M0 0h23v23H0z"></path>
              <path
                d="M11.5 22.1c-.3 0-.5 0-.8-.1C8.2 20.8 0 16.6 0 9.2 0 5.2 3.2 2 7.2 2c1.5 0 2.9.5 4.1 1.3.1.1.2.1.3.1 1.2-.9 2.7-1.4 4.2-1.4 4 0 7.2 3.2 7.2 7.2 0 7.2-8 11.5-10.4 12.7l-.2.1c-.3.1-.6.1-.9.1zM7.2 4C4.3 4 2 6.3 2 9.2c0 6.4 7.9 10.2 9.5 10.9l.1-.1c2.2-1 9.4-4.8 9.3-10.9C21 6.3 18.7 4 15.8 4c-1.1 0-2.2.4-3.1 1l-.1.1c-.8.4-1.8.4-2.5-.2-.8-.6-1.9-.9-2.9-.9z"
                fill="#607D8B"
              ></path>
            </svg>
          </Div>
          <P>Favoritos</P>
        </Div>
      </A>
      <A onClick={() => show(true)}>
        <Div display="flex" dir="column" justify="center" align="center">
          <Div>
            <svg
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 23"
              name="tb-upload"
            >
              <path fill="#fff" d="M0 0h23v23H0z"></path>
              <path
                d="M11.5 0C5.2 0 0 5.2 0 11.5S5.2 23 11.5 23 23 17.8 23 11.5 17.9 0 11.5 0zm0 21.1c-5.3 0-9.5-4.3-9.5-9.5S6.3 2 11.5 2 21 6.3 21 11.5s-4.2 9.6-9.5 9.6z"
                fill="#607D8B"
              ></path>
              <path
                d="M16.2 10.6h-3.6V7.1c0-.6-.4-1-1-1s-1 .4-1 1v3.5H6.9c-.6 0-1 .4-1 1s.4 1 1 1h3.6v3.5c0 .6.4 1 1 1s1-.4 1-1v-3.5h3.6c.6 0 1-.4 1-1s-.4-1-.9-1z"
                fill="#607D8B"
              ></path>
            </svg>
          </Div>
          <P>Súbelo</P>
        </Div>
      </A>
      <A onClick={() => show(true)}>
        <Div display="flex" dir="column" justify="center" align="center">
          <Div>
            <svg
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 23"
              name="tb-inbox"
            >
              <path fill="#fff" d="M0 0h23v23H0z"></path>
              <path
                d="M15.4 1H7.6C3.2 1 0 4.1 0 8.3v6.3C0 18.9 3.2 22 7.6 22h7.8c4.4 0 7.6-3.1 7.6-7.4V8.3C23 4.1 19.8 1 15.4 1zM21 14.6c0 3.1-2.4 5.4-5.6 5.4H7.6C4.4 20 2 17.8 2 14.6V8.3C2 5.2 4.3 3 7.6 3h7.8C18.7 3 21 5.2 21 8.3v6.3z"
                fill="#607D8B"
              ></path>
              <path
                d="M17.4 7.4l-5.1 4.8c-.4.4-1.1.4-1.6 0l-5-4.8c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1 0 1.4l3.5 3.3-3 3.1c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L9 13.5l.2.2c.6.6 1.4.9 2.2.9.8 0 1.6-.3 2.2-.9l.2-.2 2.9 3.1c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-3-3.1 3.5-3.3c.4-.4.4-1 0-1.4-.2-.4-.8-.4-1.2 0z"
                fill="#607D8B"
              ></path>
            </svg>
          </Div>
          <P>Buzón</P>
        </Div>
      </A>
      <A onClick={() => show(true)}>
        <Div display="flex" dir="column" justify="center" align="center">
          <Div>
            <svg
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 23"
              name="tb-you"
            >
              <path fill="#fff" d="M0 0h23v23H0z"></path>
              <path
                d="M11.5 0C5.2 0 0 5.2 0 11.5 0 17.9 5.2 23 11.5 23S23 17.9 23 11.5C23 5.2 17.9 0 11.5 0zm0 21C6.3 21 2 16.8 2 11.5S6.3 2 11.5 2 21 6.3 21 11.5 16.8 21 11.5 21z"
                fill="#607D8B"
              ></path>
              <path
                d="M7.7 10.6v-.1c0-.6-.4-1-1-1s-1 .4-1 1v.1c0 .6.4 1 1 1s1-.4 1-1zm8.6-1.1c-.6 0-1 .4-1 1v.1c0 .6.4 1 1 1s1-.4 1-1v-.1c0-.5-.5-1-1-1z"
                fill="#607D8B"
              ></path>
              <path
                opacity="0.5"
                d="M15.4 12.5H7.6c-.5 0-.9.4-.8.9.4 2.2 2.4 3.8 4.7 3.8 2.3 0 4.3-1.7 4.7-3.8.1-.5-.3-.9-.8-.9z"
                fill="#607D8B"
              ></path>
            </svg>
          </Div>
          <P>Tú</P>
        </Div>
      </A>
    </Div>
  );
};

export default memo(TabBar);
