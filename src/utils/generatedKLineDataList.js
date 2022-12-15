
import inforStock from "~/api/inforStock";
import blockChainStorage from '~/utils/storage';


export default function (baseTimestamp = Date.now(), basePrice = 20) {
  

  const chartBank = blockChainStorage.getChartBank()

  if(chartBank){
    const dataList = []
    let timestamp = Math.floor(baseTimestamp / 60 / 1000) * 60 * 1000

    // console.log(Math.round(Date.parse("11/29/2018 10:5:20") / 1000));
    console.log(new Date('2015-03-04T00:00:00.000Z'));

    // console.log(new Date(123213123123).toLocaleString());

    for (let i = 0; i < chartBank.length; i++) {
      const kLineModel = {

        open: chartBank[i].open_price,
        close: chartBank[i].close_price,

        low: chartBank[i].lowest_price,
        high: chartBank[i].highest_price,

        volume: chartBank[i].volume,

        timestamp
      }

      kLineModel.turnover = (kLineModel.open + kLineModel.close + kLineModel.high + kLineModel.low) / 4 * kLineModel.volume
      dataList.unshift(kLineModel)
    }
    return dataList
  }

  
}
