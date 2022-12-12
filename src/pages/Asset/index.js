import React from 'react'
import { useEffect, useState } from 'react';
import inforUser from "../../api/inforUser";
import styles from './Asset.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Asset() {
    const [assets, setAssets] = useState();
    const [assetsLock, setAssetsLock] = useState();
    const [sumAssets, setSumAssets] = useState();
    const [listStock, setListStock] = useState();
    const [total, setTotal] = useState();
    let coinVND = Intl.NumberFormat("vi-US", {
        style: "currency",
        currency: "VND",
    });
    useEffect(() => {
        const money = async ()  =>{
            try{
                const data = await inforUser.getListAssets()

                setAssets(coinVND.format(data?.data.assets.slice(-1)[0].free_asset));
                setAssetsLock(coinVND.format(data?.data.assets.slice(-1)[0].locked_asset));
                setSumAssets(coinVND.format(
                    Number.parseInt(data?.data.assets.slice(-1)[0].free_asset) + 
                    Number.parseInt(data?.data.assets.slice(-1)[0].locked_asset)
                ));
                setListStock(data.data.assets);
                setTotal(data.data.assets.length-1)
            }
            catch (err) {
                alert(err);
            }
        }
        money()
        
    }, []);

    console.log(total);

    const renderListStock =() => {
        if(listStock){  listStock.splice(total, 1)
            return listStock.map((items, index) => {
                return(
                    <div className={cx('asset-total-info-div')} key={index}>
                        <tr className={cx('border-table-border-tr')}>
                            <td className={cx('td_3')}>{items.name}</td>
                            <td className={cx('td_2', 'focus', 'right')}>
                                {coinVND.format(Number.parseInt(items.free_asset) + Number.parseInt(items.locked_asset))}
                            </td>
                            <td className={cx('td_4')}>{items.symbol}</td>
                            <td className={cx('td_1', 'green', 'right')}>{coinVND.format(items.free_asset)}</td>
                            <td className={cx('td_1', 'red', 'right')}>{coinVND.format(items.locked_asset)}</td>
                        </tr>
                    </div>  
                )
            })

            
        }
    }



    // const renderListStock =() => {
    //     // if(listStock){
    //     for(var i =0 ; i<listStock.length-1; i++){
    //         return(
    //             <div className={cx('asset-total-info-div')}>
    //                 <tr className={cx('border-table-border-tr')}>
    //                     <td className={cx('td_3')}>{listStock[i].name}</td>
    //                     <td className={cx('td_2', 'focus', 'right')}>-</td>
    //                     <td className={cx('td_4')}>Chờ khớp M/B</td>
    //                     <td className={cx('td_1', 'green', 'right')}>-</td>
    //                     <td className={cx('td_1', 'red', 'right')}>-</td>
    //                 </tr>
    //             </div>  
    //         )
    //     }

    //     // }
    // }

    

  return (
    <div className={cx('container')}>

        <div className={cx('asset-total-basic')}>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    Số dư khả dụng
                </div>
                <div className={cx('asset-total-item-value')}>
                    {assets}
                </div>
            </div>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    Số dư đang khóa
                </div>
                <div className={cx('asset-total-item-value')}>
                    {assetsLock}
                </div>
            </div>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    Tổng số dư khả dụng
                </div>
                <div className={cx('asset-total-item-value')}>
                    {sumAssets}
                </div>
            </div>  
        </div>
        
        <div className={cx('asset-total-info')}>
            <div className={cx('asset-full')}>
                <table className={cx('border-table-border')}>
                    <tbody className={cx('border-table-border-tbody')}>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr_div')}>
                                <td className={cx('td_3')}>Tên cổ phiếu</td>
                                <td className={cx('td_2')}>Tổng giá cổ phiếu sở hữu</td>
                                <td className={cx('td_4')}>Biểu tượng</td>
                                <td className={cx('td_1', 'green')}>Giá sở hữu</td>
                                <td className={cx('td_1')}>Giá khóa</td>
                            </tr>
                        </div>

                        {renderListStock()}
                       
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
  )
}

export default Asset