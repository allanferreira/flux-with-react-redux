import { useDispatch, useSelector } from 'react-redux'
import useActionTypes from '../hooks/useActionTypes'

/**
 * Lógica do Contador
 * @date 2019-09-18
 * @author {Allan Ferreira}
 * @returns {Object} counter - Interface lógica referente ao Contador
 * @returns {number} counter.count - Valor atual
 * @returns {Function} counter.increment - Aumenta o valor atual
 * @returns {Function} counter.decrement - Diminui o valor atual
 */

export default () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const {counterIncrementType, counterDecrementType} = useActionTypes()

    const increment = () => dispatch(counterIncrementType)
    const decrement = () => dispatch(counterDecrementType)

    return {
        counter,
        increment,
        decrement
    }
}
