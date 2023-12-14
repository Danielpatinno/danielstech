import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 750px;
  margin: auto;
  border: 2px solid black;
`

export const TableContainer = styled.table`
  width: 100%;
  margin: auto;

  th {
    border-bottom: 1px solid red;
    padding: 5px;
    background-color: black;
    color: white;
  }

  .emailAndInput {
    display: flex;
    justify-content: space-between;

    input {
      width: 230px;
      padding: 2px;
    }
  }

  td {
    padding: 2px;
    cursor: pointer;
  }

  tr {
    background-color: white;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: gray;
    }
  }

  .tdIndex {
    width: 30px;
    text-align: center;
  }

  .tdName {
    width: 120px;

    @media (max-width: 768px) {
      width: 150px;
    }
  }

  .tdEmail {
    width: 300px;

    @media (max-width: 768px) {
      width: 220px;
    }
  }
`
