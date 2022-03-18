import { FormCard } from 'components'
import { useParams } from 'react-router-dom'

const Form:React.FC = () => {
  const params = useParams()

  return (
    <FormCard movieId={`${params.movieId}`}/>
  )
}

export default Form