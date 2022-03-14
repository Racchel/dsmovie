import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination } from 'components'
import { Card as MovieCard } from 'components/Movie'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'

const Listing:React.FC = () => {

  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
      .then(response => {
        const data = response.data as MoviePage
        console.log(data)
        setPageNumber(data.number)
      })
  }, [])

  const arr = Array.from({ length: 10 })

  return (
    <>
      <p>{pageNumber}</p>
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