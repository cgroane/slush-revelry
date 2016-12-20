import React from 'react'
import Button from 'revelry-components/lib/Button'
import {connect} from 'react-redux'
import {increment} from '../state/counter'

export function CounterIncrementButton({onClick, counter}) {
  return (
    <Button onClick={onClick}>{counter}</Button>
  )
}

export default connect(
  ({data}) => ({counter: data.counter}),
  {onClick: increment},
)(CounterIncrementButton)
