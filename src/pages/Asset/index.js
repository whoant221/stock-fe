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

    let coinVND = Intl.NumberFormat("vi-US", {
        style: "currency",
        currency: "VND",
    });


    useEffect(() => {
        const money = async ()  =>{
            try{
                const data = await inforUser.getListAssets()
                const findStock = data?.data?.assets.findIndex(items => items.name === 'VND');
                setAssets(data?.data.assets[findStock].free_asset);
                setAssetsLock(data?.data.assets[findStock].locked_asset);
                setSumAssets(
                    Number.parseInt(data?.data.assets[findStock].free_asset) + 
                    Number.parseInt(data?.data.assets[findStock].locked_asset)
                );
                setListStock(data.data.assets);
            }
            catch (err) {
                alert(err);
            }
        }
        money()
    }, []);




    const renderListStock =() => {
        if(listStock){ 
            const findStock1 = listStock.findIndex(items => items.symbol === 'VND');
            listStock.splice(findStock1,1)
            return listStock.map((items, index) => {
                return(
                <div className={cx('asset-total-info-div')} key={index}>
                    <tr className={cx('border-table-border-tr')}>
                        <td className={cx('td_3')}>{items.name}</td>
                        <td className={cx('td_2', 'focus', 'right')}>
                            {Number.parseInt(items.free_asset) + Number.parseInt(items.locked_asset)} VND
                        </td>
                        <td className={cx('td_4')}>{items.symbol}</td>
                        <td className={cx('td_1', 'green', 'right')}>{items.free_asset} VND</td>
                        <td className={cx('td_1', 'red', 'right')}>{items.locked_asset} VND</td>
                    </tr>
                </div>  )
            })
        }
    }
    

  return (
    <div className={cx('container')}>

        <div className={cx('asset-total-basic')}>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    S??? d?? kh??? d???ng
                </div>
                <div className={cx('asset-total-item-value')}>
                    {assets} VND
                </div>
            </div>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    S??? d?? ??ang kh??a
                </div>
                <div className={cx('asset-total-item-value')}>
                    {assetsLock} VND
                </div>
            </div>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    T???ng s??? d?? kh??? d???ng
                </div>
                <div className={cx('asset-total-item-value')}>
                    {sumAssets} VND
                </div>
            </div>  
        </div>
        
        <div className={cx('asset-total-info')}>
            <div className={cx('asset-full')}>
                <table className={cx('border-table-border')}>
                    <tbody className={cx('border-table-border-tbody')}>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr_div')}>
                                <td className={cx('td_3')}>T??n c??? phi???u</td>
                                <td className={cx('td_2')}>T???ng gi?? c??? phi???u s??? h???u</td>
                                <td className={cx('td_4')}>Bi???u t?????ng</td>
                                <td className={cx('td_1', 'green')}>S??? c??? phi???u h???p l???</td>
                                <td className={cx('td_1')}>S??? c??? phi???u kh??a</td>
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