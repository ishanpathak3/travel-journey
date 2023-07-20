import React from 'react'
import locationLogo from '../images/Fill 219.svg'


function Description(props) {
    return (
        <section className='places'>
            <div className='individual-place'>
                <img src={props.image} alt='location described' className='image-place' />
                <div className='information-place'>
                    <div className='span-details'>
                        <span><img src={locationLogo} alt='location' className='location-logo' /></span>
                        <span className='address'>{props.location}</span>
                        <span className='span-last-child'><a href={props.map} target='_blank' rel='noreferrer'>View on Google Maps</a></span>
                    </div>
                    <h2 className='places-header'>{props.title}</h2>
                    <p className='date'>{props.dateFrom} - {props.dateTo}</p>
                    <p className='body-place'>{props.body}</p>
                </div>
            </div>

        </section>
    )
}

export default Description