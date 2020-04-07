import React from 'react';

const SearchBox2= ({searchChange2}) => {
    return(
        <div className='pa2'>
            <input
            className='pa3 ba b--gren bg-lightest-blue'
            type="search"
            placeholder="change log"
            onChange = {searchChange2}
            />
        </div>
    )
}



export default SearchBox2;