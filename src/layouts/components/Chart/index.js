import { init, dispose } from 'klinecharts';
import generatedKLineDataList from '~/utils/generatedKLineDataList'
import blockChainStorage from '~/utils/storage';
import { useEffect, useState, useRef } from 'react';
import React from 'react'

function Chart({style, checkChart}) {

    function getTooltipOptions (candleShowType, candleShowRule, technicalIndicatorShowRule) {
      return {
        grid: {
          show: true,
          horizontal: {
            show: true,
            size: 0.3,
            color: '#393939',
            // 'solid'|'dash'
            style: 'dash',
            dashValue: [2, 2]
          },
          vertical: {
            show: true,
            size: 0.3,
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
                { value: kLineData.open },
                { value: kLineData.close },
                { value: kLineData.high },
                { value: kLineData.low },
                {
                  value: `${change}%`,
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
      // chart.current.createTechnicalIndicator('MA', true, { id: 'candle_pane' })
      chart.current.applyNewData(generatedKLineDataList())
      chart.current && chart.current.setStyleOptions({ candle: { type: checkChart }} )
      chart.current && chart.current.setStyleOptions(getTooltipOptions(
        candleShowType
      ))
      return () => { dispose('tooltip-k-line') }
    }, [checkChart && style ])


    return <div id="tooltip-k-line" className="k-line-chart" style={ style }/>        

}

export default Chart