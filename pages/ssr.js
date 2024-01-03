import React from 'react';

export default function SSRPage({ diff, data, img }) {
  data = JSON.parse(data); // JSON 형태의 문자열로 변환
  return (
    <div className='container flex-column'>
      <div className='title'>서버 사이드 렌더링 (SSR)</div>
      <div>차이: {diff} ms</div>
      <div>Time Zone: {data.timezone}</div>
      <div>현재 시간: {data.datetime}</div>
      <div>오늘은 {data.day_of_year}일째 되는 날입니다.</div>
      <img src={img} alt="random"/>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const startDate = new Date();
    const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul'); // API 주소
    const data = await res.json(); // 응답을 JSON 형태로 변환
    const imgResponse = await fetch('https://source.unsplash.com/random');
    const img = await imgResponse.url;
    const endDate = new Date();
    const diff = endDate - startDate;
    return {
      props: {
        data: JSON.stringify(data), // 변환된 데이터를 props로 전달
        img: img,
        diff: diff,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        data: '데이터를 불러오는데 실패했습니다.',
      },
    };
  }
}

