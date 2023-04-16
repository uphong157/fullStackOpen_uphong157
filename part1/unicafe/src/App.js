import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text, value}) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad

  if (total == 0) {
    return (
      <>
        No feedback given
      </>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good + neutral * 0 + bad * (-1)) / total} />
        <StatisticLine text="positive" value={good / total * 100 + '%'} />
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addOneGood  = () => setGood(good + 1)
  const addOneNeutral = () => setNeutral(neutral + 1)
  const addOneBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={addOneGood} />
      <Button text="neutral" handleClick={addOneNeutral} />
      <Button text="bad" handleClick={addOneBad} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App