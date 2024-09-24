import React from 'react'
import { decreaseCount, increaseCount } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
	
	const dispatch = useDispatch()

	const counterData = useSelector(state=>state.counter)
	return (
		<div>
			<h1>{counterData.count}</h1>
			<br />
			<button onClick={()=> dispatch(increaseCount())}>+</button>
			<button onClick={()=> dispatch(decreaseCount())}>-</button>
		</div>
	)
}

// const mapStateToProps = state => ({
// 	count: state.counter.count
// })

// const mapDispatchToProps = dispatch => ({
// 	increaseCount: () => dispatch(increaseCount()),
// 	decreaseCount: () => dispatch(decreaseCount())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
