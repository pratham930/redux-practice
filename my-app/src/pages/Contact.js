import React from 'react'
import { useSelector} from 'react-redux'

const Contact = () => {
    const count = useSelector((state) => state.count.value)

  return (
    <div>Contact {count} </div>
  )
}

export default Contact