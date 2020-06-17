/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
import NotFound from './NotFound'

const Player = (props) => {
  // Esto lo manda router al momento de generar la ruta que es en player/:id <- Eso
  const { id } = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0
  const result = props.playing

  useEffect(() => {
    props.getVideoSource(id)
  }, [])

  if (result.length === 0) {
    return <NotFound />
  }

  return hasPlaying && (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
