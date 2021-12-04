import React from 'react';
import Header from './Header';



function NewBeer(props) {

    const {btnSubmit} = props
    return (
        <div>
<Header />

<form onSubmit={btnSubmit}>
			<input class="formFields" name="name"  type="text"  placeholder="Beer name ..."/>
            <input class="formFields" name="tagline"  type="text"  placeholder="Tagline ..."/>
			<input class="formFields desc" name="description"  type="text"  placeholder="Describe the beer..."/>
            <input class="formFields" name="first_brewed"  type="text"  placeholder="First brewed in ..."/>
            <input class="formFields" name="brewers_tips"  type="text"  placeholder="Your tips for brewing ..."/>
            <input class="formFields" name="attenuation_level"  type="number"  placeholder="Attenuation level ..."/>
            <input class="formFields" name="contributed_by"  type="text"  placeholder="Contributed by ..."/>

			<button  class="buttonS" type="submit"  >Add New</button>
		</form>
            
        </div>
    )
}

export default NewBeer
