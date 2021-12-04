import React from 'react';



function Filter(props) {

    return (
        <div>
             <input class="search" onChange={props.btnSearch}  type="text" placeholder="The beer you're looking for is ... "/> 
        </div>
    )
}

export default Filter
