import React from 'react'
function Hero({heroName}){
    if(heroName="sravani")
    throw new Error('not a sravani!')
    return(
        <div>
            {heroName}
        </div>
    )
}
export default Hero;