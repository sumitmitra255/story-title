import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuotesForm = (props) => {
	const { addItem } = props
	const [name, setName] = useState('')
	const [body, setBody] = useState('')

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handleBodyChange = (e) => {
		setBody(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const formData = {
			id: uuidv4(),
			name: name,
			body: body,
		}
		addItem(formData)
		console.log(formData)

		setName('')
		setBody('')
	}

	return (
		<div>
			<h2>Add Quote</h2>

			<form onSubmit={handleSubmit}>
				<label>Name</label> <br />
				<input type='text' value={name} onChange={handleNameChange} /> <br />
				<label>Body</label> <br />
				<input type='text' value={body} onChange={handleBodyChange} /> <br />
				<input type='submit' value='save' />
			</form>
		</div>
	)
}

export default QuotesForm
