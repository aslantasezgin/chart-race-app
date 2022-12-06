import React, { useEffect, useState } from 'react';
import './App.css';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1)
}


function App() {
  const [barData, setBarData] = useState([
    {
    id:1,
    title:"Facebook",
    color:"#4267B2",
    value:getRandomNumber(),
  },
  {
    id:2,
    title:"Amazon",
    color:"#ff9900",
    value:getRandomNumber(),
  },
  
  {
    id:3,
    title:"Youtube",
    color:"#FF0000",
    value:getRandomNumber(),
  },
  
  {
    id:4,
    title:"Google",
    color:"#34a853",
    value:getRandomNumber(),
  }
  
  ])


  const findBigBarItem = (data) => {
     return data.sort((val1,val2) => val2.value-val1.value)[0].value

  }

  const[bigBarData, setBigBarData] = useState(findBigBarItem(barData))
  
  const setBarDataWithRandom = () => {
    let data = [...barData];
    data.forEach((item) => {
      item.value+=getRandomNumber()
    })
    setBarData(data)
  }

    useEffect(() => {
      let timer;
      timer = setInterval(() => {
        setBarDataWithRandom()
      }, 500)
    }, [])

    const renderBarItem=(item,index) => {
      let rate= item.value/bigBarData
      rate = rate * (1000 - 40)
      const percent=(rate*100)/1040
      console.log(percent)
    }

  return (
    <>
    Yarışan Grafikler
    {barData.map((item) => {
      renderBarItem(item)
    })}
    </>
   
  );
}

export default App;
