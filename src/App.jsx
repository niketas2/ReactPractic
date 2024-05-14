import {useState} from 'react'
import {Question} from './Question'
import {Success} from './Success'
import {data} from './assets/data.json'
import './style.scss'

function App() {
	const [question, setQuestion] = useState([])
	const [searchValues, setSearchValues] = useState({})
	const onChangeInput = (event, id) => {
		setSearchValues({...searchValues, [id]: event.target.value})
	}
	const [success, setSuccess] = useState(false)

	const onClickSubmit = () => {
		const answers = {}
		data.forEach(obj => {
			answers[obj.question] = searchValues[obj.id] || ''
		})
		localStorage.setItem('answers', JSON.stringify(answers))
		setSuccess(true)
	}
	return (
		<>
			<div className='content'>
				{success ? (
					<Success />
				) : (
					data.map(obj => (
						<Question
							key={obj.id}
							{...obj}
							searchValue={searchValues[obj.id] || ''}
							onChangeInput={onChangeInput}
						/>
					))
				)}
				<button
					onClick={onClickSubmit}
					className={`send--btn${success ? '-hiden' : ''}`}
				>
					Отправить
				</button>
			</div>
		</>
	)
}

export default App
