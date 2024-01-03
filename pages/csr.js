import React, { useEffect, useState } from 'react';

export default function CSRPage() {
  const startDate = new Date();
  const [data, setData] = useState(null); // 초기 상태를 null로 설정
      // 데이터를 불러오는 함수
      const fetchData = async () => {
        try {
          const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul'); // 외부 API 주소
          const jsonData = await response.json(); // 응답을 JSON 형태로 변환
          const imgResponse = await fetch('https://source.unsplash.com/random');
          const imgData = await imgResponse.url;
          const endDate = new Date();
          const diff = endDate.getTime() - startDate.getTime();
          setData({data: jsonData, img: imgData, diff: diff})
        } catch (error) {
          console.error('Error fetching data:', error);
          setData('데이터를 불러오는데 실패했습니다.');
        }
      };
      
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열을 넣어주면 컴포넌트가 처음 렌더링될 때만 실행

  useEffect(() => {
    const handleButtonClick = () => {
      fetchData();
    };

    if (typeof window !== 'undefined') {
      const csrElement = document.getElementById('csr');
      csrElement.addEventListener('click', handleButtonClick);

      return () => {
        // Clean up the event listener when the component unmounts
        csrElement.removeEventListener('click', handleButtonClick);
      };
    }
  }, [startDate]); // Add startDate to the dependency array

  return (
      <div className='container flex-column'>
        <div className='title'>클라이언트 사이드 렌더링 (CSR)</div>
        {data ? <>
          <div>차이: {data.diff} ms</div>
          <div>Time Zone: {data.data.timezone}</div>
        <div>현재 시간: {data.data.datetime}</div>
        <div>오늘은 {data.data.day_of_year}일째 되는 날입니다.</div>
        <img src={data.img} alt="random"/>
        </> : <div>데이터 로딩 중...</div>}
      </div>
  );
}


