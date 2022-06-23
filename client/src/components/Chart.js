import { Bar } from 'react-chartjs-2';

import React from 'react'

export const Chart = () => {
  return (
    <Bar
    data={{
      labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
    }} 
    width={100} height={100}
    />
  )
}

