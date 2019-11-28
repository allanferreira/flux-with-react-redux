import styled from 'styled-components'

export const Counter = styled.div`
    border: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    width:70px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    height: 25px;
    overflow: hidden;

    button {
        height: inherit;
        border: 0;
        background: #ddd;
        cursor: pointer;
        &:hover {
            background: #eaeaea;
        }
        &:focus {
            outline: 0;
        }
    }
`
