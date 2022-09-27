import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import AnimalCard from '../AnimalCard/AnimalCard'
import { toast } from 'react-toastify'

function EditAnimalDetails(props) {
  const params = useParams();
  const navigate = useNavigate()
  const [animal, setAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
  });

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/animals/${params.animalId}`)
      const data = await res.json()
      setAnimal(data)
      setFormData(data)
    }

    fetchApi()
  }, [params])

  function handleInputChange(e) {
    setFormData({
      // ...formData ->
      // name: 'asdasd',
      // species: 'asdasd',
      // breed: 'asdasd'
      ...formData,
      [e.target.name]: e.target.value,
    });

    // setFormData({name: 'asdasd', species: 'asdasd', breed: 'asdasd',    species: 'someSpecies'})
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // validations ...

    // processing

    fetch(`http://localhost:8000/api/v1/animals/${params.animalId}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        toast.success("Edit animal successful")
        navigate('/')

      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  return (

    <div className='container'>
      <h1 className='my-5'>Edit{animal ? ` ${animal.name}` : ''}</h1>

      <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="species" className="form-label">Species</label>
                <input type="text" className="form-control" id="species" value={formData.species} name='species' onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="breed" className="form-label">Breed</label>
                <input type="text" className="form-control" id="breed" value={formData.breed} name='breed' onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default EditAnimalDetails;
