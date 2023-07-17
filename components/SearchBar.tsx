"use client"


import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {

  const [manufacture, setManufacture] = useState('');

  const handlerSearch = () =>{}

  return (
    <form action="" onSubmit={handlerSearch} className='searchbar' >
      <div className="searchBar__item">
        <SearchManufacturer 
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
    </form>
  )
}

export default SearchBar