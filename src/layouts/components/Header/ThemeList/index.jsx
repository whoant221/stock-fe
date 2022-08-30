import React from 'react';
import ThemeItem from '../ThemeItem/index';
import './ThemeList.scss';

function ThemeList() {

	return (
		<div className="row sm-gutter theme__list">
			<div className="col l-12 m-12 c-12">
				<div className="theme__container-info">
					<h3 className="theme__info-name">

					</h3>
				</div>
			</div>
			<ThemeItem/>

		</div>
	);
}

export default ThemeList;
