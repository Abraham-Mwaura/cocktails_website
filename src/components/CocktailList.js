import React, { useEffect } from "react"

import Cocktail from "./Cocktail"
import Loading from "./Loading"
import {useGlobalcontext} from "../context"

export default function CocktailList () {
    const {cocktails,setScrolled, loading} = useGlobalcontext()

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    })

    const handleScroll=()=>{
        const offset=window.scrollY
        if(offset>200){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    if(loading){
        return <Loading />
    }
    if (cocktails.length < 1 ) {
        return (
            <h2 className="section-title">
                no cocktailss matched your search criteria

            </h2>
        )
    }
  

 
    }



    return (
        <section className= "section">
            <h2 className ="section-title"> cocktails</h2>
            <div className= "cocktails-center">
                    {cocktails.map((item)=>{
                        return <Cocktail key={item.id} {...item} />
                    })}
            </div>
        </section>
    )
}