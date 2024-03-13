import '@/src/styles/main.scss';

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/src/router';

// vw, vh 스크롤영역 처리
function setScreenSize(e: any) {
  document.documentElement.style.setProperty("--vw", `1px`);
  document.documentElement.style.setProperty("--vh", `1px`);
  let vw = document.documentElement.clientWidth * 0.01;
  let vh = document.documentElement.clientHeight * 0.01;
  document.documentElement.style.setProperty("--vw", `${vw}px`); //"--vw"라는 속성으로 정의해준다.
  document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}
window.addEventListener('resize', (e) => setScreenSize(e));
window.addEventListener('load', (e) => setScreenSize(e));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
