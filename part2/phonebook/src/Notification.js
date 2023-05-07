const msgStyle = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
}

const errorStyle = {
  color: 'red',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
}

const Notification = ({message, isErrorMsg}) => {
  if (message === null) {
    return null
  }

  const style = isErrorMsg ? errorStyle : msgStyle

  return (
    <div style={style} >
      {message}
    </div>
  )
}

export default Notification