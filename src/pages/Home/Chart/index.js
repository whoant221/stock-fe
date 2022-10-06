import { init, dispose } from 'klinecharts';
import generatedKLineDataList from '~/utils/generatedKLineDataList'
import { useEffect, useState, useRef } from 'react';
import React from 'react'

function Chart({style}) {
  // console.log(style);

    // useEffect(() => {
    //   function updateData (kLineChart) {
    //     setTimeout(() => {
    //       if (kLineChart) {
    //         const dataList = kLineChart.getDataList()
    //         const lastData = dataList[dataList.length - 1]
    //         const newData = generatedKLineDataList(lastData.timestamp, lastData.close, 1)[0]
    //         newData.timestamp += 1000 * 60
    //         kLineChart.updateData(newData)
    //       }
    //       updateData(kLineChart)
    //     }, 1000)
    //   }

    //   const kLineChart = init('basic-k-line')
    //   kLineChart.applyNewData(generatedKLineDataList())
    //   updateData(kLineChart)
    //   return () => {
    //     dispose('basic-k-line')
    //   }
    // }, []);

    function getTooltipOptions (candleShowType, candleShowRule, technicalIndicatorShowRule) {
      return {
        grid: {
          show: true,
          horizontal: {
            show: true,
            size: 1,
            color: '#393939',
            // 'solid'|'dash'
            style: 'dash',
            dashValue: [2, 2]
          },
          vertical: {
            show: true,
            size: 1,
            color: '#393939',
            // 'solid'|'dash'
            style: 'dash',
            dashValue: [2, 2]
          }
        },
        candle: {
          tooltip: {       
            showType: candleShowType,
            showRule: candleShowRule,
            labels: ['Time: ', 'Open: ', 'Close: ', 'High: ','Low: ', 'Chg: '],
            values: kLineData => {
              const change = (kLineData.close - kLineData.open) / kLineData.open * 100
              return [
                { value: new Date(kLineData.timestamp).toLocaleString() },
                { value: kLineData.open.toFixed(2) },
                { value: kLineData.close.toFixed(2) },
                { value: kLineData.high.toFixed(2) },
                { value: kLineData.low.toFixed(2) },
                {
                  value: `${change.toFixed(2)}%`,
                  color: change < 0 ? '#EF5350' : '#26A69A'
                }
              ]
            }
          }
        },
        technicalIndicator: {
          tooltip: {
            showRule: technicalIndicatorShowRule
          }
        }
      }
    }

    
    const chart = useRef()
    const [candleShowType, setCandleShowType] = useState('standard')
  
    useEffect(() => {
      chart.current = init('tooltip-k-line')
      chart.current.createTechnicalIndicator('MA', false, { id: 'candle_pane' })
      chart.current.applyNewData(generatedKLineDataList())
      return () => { dispose('tooltip-k-line') }
    }, [])
  
    useEffect(() => {
      chart.current && chart.current.setStyleOptions(getTooltipOptions(
        candleShowType
      ))
    }, [candleShowType])

    return (
      <>
        <div id="tooltip-k-line" className="k-line-chart" style={ style }/>
      </>

    )
}

export default Chart