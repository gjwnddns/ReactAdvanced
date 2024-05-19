import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ListView from './component/ListView';

function App() {

  const[getList, setList] = useState({});

  useEffect(()=>{
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231205`

    fetch(url)
    .then(res => res.json())
    .then(res => setList(res.boxOfficeResult.dailyBoxOfficeList))
},[]);

console.log(getList);
  return (
    <div className="App">
      <header className="App-header">
        <a href="">clickhere</a>
        {getList && <ListView resultData={getList} />}
      </header>
    </div>
  );
}

export default App;
