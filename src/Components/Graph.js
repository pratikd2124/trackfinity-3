import React, { Component } from 'react'
import ColumnChart from './Graphs/CoulmnChart'
import LineChart from './Graphs/LineChart'

const Graph = () => {
  return (
      <>
        <div className="flex justify-content-center">
              <LineChart />
              <ColumnChart />
        </div>
      </>
  )
}

export default Graph