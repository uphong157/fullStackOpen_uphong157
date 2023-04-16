import { useState } from 'react'
/*
const Btn = (props) => {
  return <button>{props.text}</button>
}
*/

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
      <button onClick={addOneGood}>good</button>
      <button onClick={addOneNeutral}>neutral</button>
      <button onClick={addOneBad}>bad</button>
      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good + neutral * 0 + bad * (-1)) / (good + neutral + bad)}</p>
      <p>positive {good / (good + neutral + bad) * 100} %</p>
    </div>
  )
}

export default App