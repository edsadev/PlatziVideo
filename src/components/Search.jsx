import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { getSearch, emptySearch } from '../actions'
import '../assets/styles/components/Search.scss'

const Search = (props) => {
  const { isHome } = props

  const handleInput = (event) => {
    if (event.target.value !== '') {
      props.getSearch(event.target.value)
    } else if (event.target.value === '') {
      props.emptySearch()
    }
  }

  const inputStyle = classNames('input', {
    isHome,
  })

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' onChange={handleInput} />
    </section>
  )
}

const mapDispatchToProps = {
  getSearch,
  emptySearch,
}

export default connect(null, mapDispatchToProps)(Search)
