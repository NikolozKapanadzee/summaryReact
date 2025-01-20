import React from 'react';
import './Result.css';

function Result() {
  return (
    <>
    <div className="result_div">
      <p className='title'>Your Result</p>
      <div className="point_div">
        <div className="out_of_point_div">
          <h1 className='your_point'>76</h1>
          <p className='max_point'>of 100</p>
        </div>
      </div>
      <h3 className='rateness'>Great</h3>
      <p className='caption'>Your perfomance exceed 65% of the
         people conducting the test here</p>
    </div>
    </>
  );
}

export default Result;