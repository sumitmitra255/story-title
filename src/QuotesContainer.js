import React, { useState, useEffect } from 'react'
import QuotesForm from './QuotesForm'
import QuotesList from './QuotesList'

const QuotesContainer = (props) => {
	const [quotes, setQuotes] = useState([])

	useEffect(() => {
		const result = JSON.parse(localStorage.getItem('quotes')) || []
		setQuotes(result)
	}, [])

	useEffect(() => {
		localStorage.setItem('quotes', JSON.stringify(quotes))
	}, [quotes])

	const addItem = (quote) => {
		const result = [...quotes, quote]
		setQuotes(result)
	}
	console.log(quotes)

	const removeItem = (id) => {
		const result = quotes.filter((ele) => {
			return ele.id !== id
		})
		setQuotes(result)
	}
	return (
		<div>
			<QuotesList quotes={quotes} removeItem={removeItem} />

			<QuotesForm addItem={addItem} />
		</div>
	)
}
export default QuotesContainer
