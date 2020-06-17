import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/Home.scss'

const Home = ({ myList, trends, originals }) => {
  return (
    <div className='Home'>
      <Search />
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Vídeo'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  )
}

// Trae cada uno de los elementos que necesito del estado
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home)
