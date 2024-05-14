import React from 'react'

export const Question = ({question, id, onChangeInput, searchValue}) => {
	return (
		<div className='question--block'>
			<p className='question--title'>{question}</p>
			<input
				value={searchValue}
				onChange={event => onChangeInput(event, id)}
				className='question--input'
				placeholder='*Введите текст'
				type='text'
			/>
		</div>
	)
}
