import React from 'react'
import { Pagination } from 'components'
import { Card as MovieCard } from 'components/Movie'

const Listing:React.FC = () => {

  return (
    <>
      <Pagination />
      <MovieCard />
    </>
  )
}

export default Listing