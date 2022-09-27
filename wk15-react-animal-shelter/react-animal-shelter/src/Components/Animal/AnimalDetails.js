import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import AnimalCard from '../AnimalCard/AnimalCard'

function AnimalDetails(props) {
  const params = useParams()
  const [animal, setAnimal] = useState(null)

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/animals/${params.animalId}`)
      const data = await res.json()
      setAnimal(data)
    }

    fetchApi()
  }, [params.animalId])

  return (
    <>
    {/* { animal ? 
      (<AnimalCard key={animal._id} data={animal}/>) : ""
    } */}
    { animal && (<AnimalCard key={animal._id} data={animal}/>)}
    </>
  )
}

export default AnimalDetails
