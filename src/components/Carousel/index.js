import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import StarRatingComponent from 'react-star-rating-component';
import './index.css';

export default (props) => {

	//console.log('props', props);
	//console.log("constructor");

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 0;
	const listProp = props.listProp ?
		props.listProp :
		[{ name: "test 1" }, { name: "test 2" }];

	const listCards = listProp.map((listItem) => {
		//console.log('listItem.listCardTitle', listItem.listCardTitle);
		//console.log('listItem.listCardImage', listItem.listCardImage);
		return (
			<div style={{ width: '100%', height: 450, background: '#fff', padding: 10, margin: 5, border: '1px solid #000', "border-radius": '10px' }}>

				<div>
					<img src="https://picsum.photos/150/150" alt="" width="100%" />
				</div>

				<div>
					<StarRatingComponent
						name="starRating"
						editing={false}
						starCount={5}
						value={listItem.listCardRating}
					/>
				</div>
				<div style={{
					"background-color": '#000',
					"color": '#fff',
					"display": 'inline-block',
					"padding-left": 8,
					"padding-right": 8,
					"text-align": 'center'
				}}>{listItem.listCardTag}</div>



				<div style={{
					"width": '100%',
					"font-size": 14,
					"font-weight": 'bold',
					"color": '#000',
					"display": 'inline-block',
					"margin-top": 5,
					"margin-bottom": 5,
					"text-align": 'center'
				}}>{listItem.listCardDescription}</div>

				<div style={{
					"width": '100%',
					"font-size": 20,
					"font-weight": 'bold',
					"color": '#000',
					"display": 'inline-block',
					"margin-top": 10,
					"margin-bottom": 10,
					"text-align": 'center'
				}}>{listItem.listCardTitle}</div>




				<div style={{
					"width": '100%',
					"font-size": 14,
					"color": '#000',
					"display": 'inline-block',
					"margin-top": 10,
					"margin-bottom": 10,
					"text-align": 'center'
				}}>Starting at {listItem.listCardPrice}</div>

				<div style={{
					"width": '100%',
					"display": 'flex',
					"justify-content": 'center'
				}}><button className="buttonAddToCart">Add to Cart</button></div>



			</div >
		);
	}
	);


	return (
		<div style={{ padding: `0 ${chevronWidth}px` }}>
			<ItemsCarousel
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={2}
				gutter={10}
				chevronWidth={chevronWidth}
			>
				{listCards}
			</ItemsCarousel>
		</div>
	);
};