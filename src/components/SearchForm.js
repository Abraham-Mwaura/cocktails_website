import React from "react"
import {useGlobalcontext} from "../context"

export default function SearchForm() {
    const {setSearchTerm} = useGlobalcontext() // destructuring the function
    const searchvalue = React.useRef("")

    React.useEffect(()=> {
        searchvalue.current.focus()
    }, [])

    function searchCocktail(){
        setSearchTerm(searchvalue.current.value)
    }
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <section className = "section search">
            <form className = "search-form" onSubmit = {handleSubmit}>
                <div className = 'form-control'>
                    <label htmlFor ="name"> search your favorite cocktail @Abraham's production inc.</label>
                    <input 
                        type= "text"
                        name= "name"
                        id="name"
                        ref={searchvalue}
                        onChange={searchCocktail}
                    />
                
                </div>
            </form>
        </section>
    )
}