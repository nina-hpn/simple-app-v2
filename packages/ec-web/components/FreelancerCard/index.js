import React from 'react'

export default function FreelancerCard(props) {
    return (
        <div key={props._id} className='card '>
            <a href={'/profiles/' + props.card._id}>
            <img className='card-img-top' alt={props.card.name} src={'http://localhost:1337' + props.card.avatar.url}></img>
            <div className='card-body'>
                <div className='card-title'>{props.card.user.username}</div>
                <div className='card-text'>{props.card.skills}</div>
            </div>
            </a>
            <style jsx>
                {`
                .card{
                        font-family: 'Raleway';
                        
                        width: 10rem;
                        .card-title{
                            font-weight: 700;
                        }
                        >*{
                            color: purple;
                        }
                        a{
                            text-decoration: none;
                        }
                        margin-bottom: 30px;
                    }
                `}
            </style>
        </div>
    )
}
