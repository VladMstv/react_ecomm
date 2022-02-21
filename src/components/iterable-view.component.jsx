// import React from 'react'

// function* mapIter(iterator, predicate) {
// 	// eslint-disable-next-line no-restricted-syntax
// 	for (const elem of iterator) {
// 		yield predicate(elem)
// 	}
// }

// function* takeIter(iterator, take) {
// 	let ind = 0
// 	// eslint-disable-next-line no-restricted-syntax
// 	for (const elem of iterator) {
// 		if (ind <= take) yield elem
// 		ind += 1
// 	}
// }

// function IterableView(props) {
// 	const { take, mapPredicate, items } = props
// 	let iter = items

// 	if (take) {
// 		iter = takeIter(iter, take)
// 	}
// 	if (mapPredicate) {
// 		iter = mapIter(iter, mapPredicate)
// 	}

// 	return <div>{Array.from(iter)}</div>
// }

// IterableView.propTypes = function () {
// 	return {
// 		take: PropTypes.any,
// 		mapPredicate: PropTypes.func,
// 		items: PropTypes.array,
// 	}
// }

// export default IterableView
