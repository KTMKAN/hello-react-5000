import '@/src/styles/main.scss';

import { RouterProvider } from 'react-router-dom';
import router from '@/src/router';

import { QueryClient, QueryClientProvider } from "react-query"

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
