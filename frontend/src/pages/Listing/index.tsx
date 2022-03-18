import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination } from 'components'
import { Card as MovieCard } from 'components/Movie'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'
import movies from 'mocks'

const Listing:React.FC = () => {

  const [pageNumber, setPageNumber] = useState(0)

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
      .then(response => {
        const data = response.data as MoviePage
        setPage(data)
      })
  }, [pageNumber])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
  //     const data = response.data as MoviePage
  //     setPage(data)
  //   }
  //   fetchData()
  // }, [pageNumber])

  return (
    <>
      <Pagination />
      <div className='container'>
        <div className='row'>

          {
            page.content.map((movie) => (
              <div key={movie.id} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                <MovieCard movie={movie}/>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Listing