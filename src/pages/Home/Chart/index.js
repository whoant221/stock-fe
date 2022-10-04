import { init, dispose } from 'klinecharts';
import generatedKLineDataList from '~/utils/generatedKLineDataList'
import { useEffect } from 'react';
import React from 'react'

function Chart({style}) {
  console.log(style);

    useEffect(() => {
        const kLineChart = init('basic-k-line')
        kLineChart.applyNewData(generatedKLineDataList())
        return () => {
          dispose('basic-k-line')
        }
    }, []);

    const tooltip = {
        showrule: 'always',
        showtype: 'standard',
        labels: ['haha', 'haha', 'haha', 'haha', 'haha', 'haha'] ,
        values: null,
        defaultValue: 'n/a',
        rect: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 6,
          offsetLeft: 8,
          offsetTop: 8,
          offsetRight: 8,
          borderRadius: 4,
          borderSize: 1,
          borderColor: '#3f4254',
          backgroundColor: 'rgba(17, 17, 17, .3)'
        },
    }

    return (
        <div {...tooltip} id="basic-k-line" style={ style }/>
    )
}

export default Chart