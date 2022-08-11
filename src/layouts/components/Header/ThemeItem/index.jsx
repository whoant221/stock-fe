import React from 'react';
import './ThemeItem.scss';

function ThemeItem() {

	return (
		<div className="theme__container-item" data-index="0">
			<div className="theme__item-display row__item-display br-5">
				<div
					className="theme__item-img row__item-img"
					style={{
						backgroundImage: `url('https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/d/3/f/8d3f4737da368ab48eeab261267a5187.jpg') no-repeat center center / cover`,
					}}
				>
					<img src='https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/d/3/f/8d3f4737da368ab48eeab261267a5187.jpg'></img>
				</div>
				<div className="overlay"></div>
				<div className="theme__item-actions row__item-actions">
					<button className="button theme__actions-btn btn--apply-theme button-primary" 
					// onClick={handleApplyTheme}
					>
						<span className="theme__btn-title">Áp dụng</span>
					</button>
					<button className="button theme__actions-btn btn--preview hide-on-mobile" 
					// onClick={handlePreviewTheme}
					>
						<span className="theme__btn-title">Xem trước</span>
					</button>
				</div>
			</div>
			<div className="theme__item-info">
				<div className="theme__item-name">
					{/* {name} */} abc
					</div>
			</div>
		</div>
	);
}

export default ThemeItem;
