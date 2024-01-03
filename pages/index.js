import React from 'react';

export default function Home() {
  return (
    <div className='container flex-column'>
      <div className='title'>성실함 선호팀</div>
      <div className='title'>
        SSR, SSG, CSR을 비교하는 예제 페이지입니다.
      </div>
      <div className='description container'>
        <div className='card'>
          <div className='description-title bg-white'>SSR</div>
          <div className='description-content bg-white'>
            서버 사이드 렌더링은 서버에서 렌더링을 하기 때문에 HTML을 브라우저에
            보여주기까지의 시간이 빠릅니다. 하지만 매 요청마다 서버에서 렌더링을
            하기 때문에 서버에 부담이 됩니다.
          </div>
        </div>
        <div className='card'>
          <div className='description-title bg-white'>SSG</div>
          <div className='description-content bg-white'>
            정적 사이트 생성은 빌드 시점에 HTML을 생성하기 때문에 브라우저에
            보여주기까지의 시간이 빠릅니다. 하지만 빌드 시점에 HTML을 생성하기
            때문에 데이터가 자주 바뀌는 페이지에는 적합하지 않습니다.
          </div>
        </div>
        <div className='card'>
          <div className='description-title bg-white'>CSR</div>
          <div className='description-content bg-white'>
            클라이언트 사이드 렌더링은 브라우저에서 렌더링을 하기 때문에 서버에
            부담이 되지 않지만, HTML을 브라우저에 보여주기까지의 시간이 느립니다.
          </div>
        </div>
      </div>
    </div>
  );
}
