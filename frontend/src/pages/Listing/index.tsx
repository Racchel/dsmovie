import React from 'react'
import { Pagination } from 'components'
import { Card as MovieCard } from 'components/Movie'

const Listing:React.FC = () => {

  const arr = Array.from({ length: 10 })


  return (
    <>
      <Pagination />
      <div className='container'>
        <div className='row'>

          {
            arr.map(() => (
              <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                <MovieCard />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Listing