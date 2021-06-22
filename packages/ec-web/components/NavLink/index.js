import React from 'react'
import Link from 'next/link'




export default function NavLink( {link} ) {
    return (
        <div className='link-container' key={link._id}>
            <a href={'/categories/' + link._id} className='link'>{link.name}</a>
            <style jsx>
                { `
                    .link-container{
                        display: inline-block;
                        margin: 2%;
                        text-align: center;
                        border-radius: 10px;

                        :hover{
                            background-color: var(--main-color);
                        }
                    }
                    .link{
                        color: var(--main-color);
                        text-decoration: none;
                        font-family: Raleway;
                        font-size: 1rem;
                        font-weight: 600;
                        text-align: center;
                        align-items: center;
                        padding: 2%;
                        :hover{
                            color: white;
                            
                        }
                    }
                `}
            </style>
        </div>
    )
}
