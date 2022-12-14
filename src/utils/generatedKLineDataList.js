import blockChainStorage from '~/utils/storage';

export default function (arr) {
  
    const chartBank = blockChainStorage.getChartBank()
    
    const dataList = []

    if(chartBank){ 
      for (let i = 0; i < chartBank.length; i++) {
        const kLineModel = {
          open: chartBank[i].open_price,
          close: chartBank[i].close_price,
          low: chartBank[i].lowest_price,
          high: chartBank[i].highest_price,
          volume: chartBank[i].volume,
          timestamp: new Date(chartBank[i].open_time).getTime()
        }
        kLineModel.turnover = (kLineModel.open + kLineModel.close + kLineModel.high + kLineModel.low) / 4 * chartBank[i].volume
        dataList.unshift(kLineModel)
      }
      return dataList
  }
}
