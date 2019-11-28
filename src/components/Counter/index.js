import React from 'react'
import { useCounter } from '../../actions'
import * as S from './styles'

export default () => {
    const { decrement, increment, counter } = useCounter()

    return (
        <S.Counter>
            <button onClick={() => decrement()}>-</button>
            <div>{ counter }</div>
            <button onClick={() => increment()}>+</button>
        </S.Counter>
    )
}
