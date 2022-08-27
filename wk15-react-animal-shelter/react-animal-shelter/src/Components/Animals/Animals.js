import React, { useEffect, useState } from 'react'
import AnimalCard from '../AnimalCard/AnimalCard'
import styles from "./Animals.module.scss"

function Animals() {

  const [ animalsList, setAnimalsList ] = useState([])
  
  useEffect(() => {

    const fetchApi = async () => {
      const res = await fetch('http://localhost:8000/api/v1/animals')
      const data = await res.json()
      console.log('data: ', data)
      setAnimalsList(data)
    }

    fetchApi()
  }, [])

  console.log('animalsList: ', animalsList)

  const animalCard = animalsList.map( animal => (<AnimalCard key={animal._id} data={animal} />))

  return (
    <div className={styles['animals-container']}>
      { animalCard }
    </div>
  )
}

export default Animals