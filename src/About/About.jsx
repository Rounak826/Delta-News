

import React from 'react'
import aboutimg from  '../Assets/about.svg'
import './About.css'
export default function About() {
    return (
        <>
            <h1>About Delta-News</h1>
            <div className="about">
                <div className="text">
                    <h3>What is Delta-News</h3>
                    <hr />
                    <p>Delta-News is a React Website which delivers Top headlines of world category wise.Get all top headlines of World business, sports, science, technology, or entertainment provided by newsApi.org</p>
                    <h3>How to use Delta-News</h3>
                    <hr />
                    <p>Delta-News is a very easy to use website. Once you open the link it will load top headlines around the world of general category. However you can change the category by toggling the category drop down present on the navbar</p>
                    <h3>Creator</h3>
                    <hr />
                    <p>Delta-News is created by Rounak Bisen .Using React-Js , Bootstrap, newsAPI and other resources.</p>
                
                </div>
                <div className="img my-auto">
                    <img src={aboutimg} alt='illustration' />
                </div>
               </div>
        </>
    )
}
