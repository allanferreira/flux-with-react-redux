import React, { useState, useEffect } from 'react'
import { useCounter } from '../../actions'

export default () => {
    const { counter } = useCounter()
    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage(counter === 0 ? 'O valor deve ser maior que zero' : '')
    }, [counter])

    return (<div>{ message }</div>)
}
