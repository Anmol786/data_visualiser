import React from 'react';

import 'react-svg-radar-chart/build/css/index.css'
import Radar from 'react-d3-radar';

const Pestles = ({test,pest})=>{
    return(
        <>
        <Radar
       width={500}
       height={500}
       padding={70}
       domainMax={50}
       highlighted={null}
       data={{
         variables:
           test,
         sets: [
           {
             values: pest,
           }
         ],
       }}
     />
        </>
    )
}
export default Pestles;