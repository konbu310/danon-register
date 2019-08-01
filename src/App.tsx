import * as React from "react";
import { FC, useEffect, useRef, useState } from "react";
import { injectGlobal, css, cx } from "emotion";

injectGlobal`
  body {
    margin: 0;
    background: #000;
  }
  
  video {
    display: block;
    width: 100%;
  }
`;

export const App: FC = () => {
  const pref = {
    video: true,
    audio: false
  };

  useEffect(() => {
    const videoElm = document.getElementById("video") as HTMLVideoElement;

    videoElm &&
      navigator.mediaDevices
        .getUserMedia(pref)
        .then(stream => {
          videoElm.srcObject = stream;
        })
        .catch(err => {
          console.error(err);
        });
  }, []);

  return <video id="video" autoPlay playsInline></video>;
};
