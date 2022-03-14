import React from 'react'
import axios from 'axios'
import { Pagination } from 'components'
import { Card as MovieCard } from 'components/Movie'
import { BASE_URL } from 'utils/requests'

const Listing:React.FC = () => {

  // FORMA ERRADA
  axios.get(`${BASE_URL}/movies?size=12&page=1`)
    .then(response => {
      console.log(response.data)
    })

  const arr = Array.from({ length: 10 })

  return (
    <>
      <Pagination />
      <div className='container'>
        <div className='row'>

          {
            arr.map((item, i) => (
              <div key={i} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
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