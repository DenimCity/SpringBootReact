import styled from 'styled-components'


export const TableWrapper = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
`
export const Table = styled.div `
   border: 1px black solid;
    padding: 5px;
    display: flex;
    color: black;
    justify-content: center;
    background-color: lightgray;
    color: black;
    width: 100%;
    
`

export const Column = styled.div `
    text-align: left;
`
export const ColumnTitle = styled.div `
    padding-bottom: 1.5vh;
    padding-right: 1.2vw;
    text-align:left;
    rowsspan:2;
`

export const Holder = styled.div `
    padding: 1px 0;
`
export const LinkWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
` 
