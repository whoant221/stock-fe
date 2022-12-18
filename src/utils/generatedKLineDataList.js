
import inforStock from "~/api/inforStock";
import blockChainStorage from '~/utils/storage';

export default function (baseTimestamp = Date.now(), basePrice = 20) {
  const chartBank = blockChainStorage.getChartBank()
  if(chartBank){
    const dataList = []

    for (let i = 0; i < chartBank.length; i++) {
      const kLineModel = {
        open: chartBank[i].open_price,
        close: chartBank[i].close_price,
        low: chartBank[i].lowest_price,
        high: chartBank[i].highest_price,
        volume: chartBank[i].volume,
        timestamp: new Date(chartBank[i].open_time).getTime()
      }
      dataList.unshift(kLineModel)
    }
    return dataList
  }
}
