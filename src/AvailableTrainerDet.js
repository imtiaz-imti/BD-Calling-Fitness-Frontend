import React from 'react'

const AvailableTrainerDet = ({props}) => {
    return (
        <div className='rtd1'>
           <div className='rtd11'>
             <div className='rtd111'>{props.name}</div>
             <div className='rtd112'>Booked by {props.trainerBookedByTrainees.length} trainees</div>
           </div>
        </div>
    )
}

export default AvailableTrainerDet
