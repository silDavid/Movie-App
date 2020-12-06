import React from 'react'


const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <form>
            <div className="d-flex justify-content-center p-5">
                <input 
                className="search rounded-pill p-3"  
                type="text" 
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                >
                </input>
            </div>
        </form>
    )
}

export default SearchBar
