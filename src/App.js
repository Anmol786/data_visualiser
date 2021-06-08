import './App.css';
import React, { useReducer } from 'react'
// import RadarChart from 'react-svg-radar-chart';
import Sectors from './Filters/Sectors.jsx'
import Topics from './Filters/Topics';
import Regions from './Filters/Regions';
import Pestles from './Filters/Pestles';



var json_data = require('./jsondata.json');

var initialState = {
  'sector':false,
  'topic':false,
  'region':false,
  'pest':false
}

var reducer = (state,action)=>{
  switch(action.type){
    case 'sector':
      return {...initialState,'sector':true};

    case 'topic':
      return {...initialState,'topic':true};

    case 'region':
    return {...initialState,'region':true};

    case 'pest':
    return {...initialState,'pest':true};

    default:
      return {...initialState,'sector':true};
  }
}

function App() {

  var [state,dispatch] = useReducer(reducer,initialState)


  var sectors = {};
  var topics = {};
  var region = {};
  var pest = {};

  var start_year = 2015,end_year = 2020;

 


  for(var i=0;i<json_data.length;i++)
  {
    // Sector data
    if(sectors[json_data[i].sector])
      {
        sectors[json_data[i].sector]+=1
      }
      else if(json_data[i].sector!=="")
      {
        sectors[json_data[i].sector] = 1;
      }
// topics data
      if(topics[json_data[i].topic])
      {
        topics[json_data[i].topic]+=1
      }
      else if(json_data[i].topic!=="")
      {
        topics[json_data[i].topic] = 1;
      }
// region data
      if(pest[json_data[i].pestle])
      {
        pest[json_data[i].pestle]+=1
      }
      else if(json_data[i].pestle!=="")
      {
        pest[json_data[i].pestle] = 1;
      }

      // pest data
      if(region[json_data[i].region])
      {
        region[json_data[i].region]+=1
      }
      else if(json_data[i].region!=="")
      {
        region[json_data[i].region] = 1;
      }

  }
  var test = []
  for(let j in sectors)
  {
    if(j==="")
    continue;
    else
    {
      sectors[j] = sectors[j]%100;
      // console.log(j," ",sectors[j])
      var obj = {
        key:j,
        label:j
      }
      test.push(obj)
      // console.log("caps",captions)
    }
  }
  var test_topic = []
  for(let j in topics)
  {
    if(j==="")
    continue;
    else
    {
      topics[j] = topics[j]%40;
      // console.log(j," ",sectors[j])
      var obj2 = {
        key:j,
        label:j
      }
      test_topic.push(obj2)
      // console.log("caps",captions)
    }
  }
  var test_region = []
  for(let j in region)
  {
    if(j==="")
    continue;
    else
    {
      region[j] = region[j]%20;
      // console.log(j," ",sectors[j])
      var obj3 = {
        key:j,
        label:j
      }
      test_region.push(obj3)
      // console.log("caps",captions)
    }
  }
  var test_pest = []
  for(let j in pest)
  {
    if(j==="")
    continue;
    else
    {
      pest[j] = pest[j]%40;
      // console.log(j," ",sectors[j])
      var obj4 = {
        key:j,
        label:j
      }
      test_pest.push(obj4)
      // console.log("caps",captions)
    }
  }
  


  return (
    <>
    <div className="App">
      <div className="app-container">
        
        <div className="filter">
          <div className="option">
          <input type="radio" id="sector" checked={state.sector} onClick = {()=>dispatch({type:'sector'})}/>
          <label for="sector">Sector</label><br></br>
          </div>
          <div className="option">
            <input type="radio" id = "topic" checked={state.topic} onClick = {()=>dispatch({type:'topic'})}/>
            <label for="topic">Topic</label><br></br>
          </div>
          <div className="option">
            <input type="radio" id = "region" checked={state.region} onClick = {()=>dispatch({type:'region'})}/>
            <label for="region">Region</label><br></br>
          </div>
          <div className="option">
            <input type="radio" id = "pest" checked={state.pest} onClick = {()=>dispatch({type:'pest'})}/>
            <label for="pest">Pestle</label><br></br>
          </div>
        </div>
        
        <div className="chart">
          {state.sector && <Sectors test = {test} sectors = {sectors}/>}
          {state.pest && <Pestles test = {test_pest} pest = {pest}/>}
          {state.region && <Regions test = {test_region} regions = {region}/>}
          {state.topic && <Topics test = {test_topic} topics = {topics}/>}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
