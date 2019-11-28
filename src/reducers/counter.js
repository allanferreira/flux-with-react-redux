export default (state = 0, action) => {
    switch (action.type) {
        case 'counter-increment':
            return state + 1
        case 'counter-decrement':
            return state <= 0 ? 0 : state - 1
        default:
            return state
    }
}
