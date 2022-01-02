import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@material-ui/core';

const Activity = (props) => {
    const phone = useMediaQuery('(max-width:768px)');
    const [activities, setActivities] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/api/activities/${props.itineraryID}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setActivities(data.activities)
                } else {
                    setActivities({ msg: 'No data to display yet' })
                }
            })


    }, [props.itineraryID])

    return (
        <div style={{ height: `${phone ? '100px' : '180px'}`, overflow: 'auto' }}>

            {activities.first &&
                <>
                    <div className='first-activity' style={{ width: '100%', backgroundPosition: 'center', backgroundImage: `url(${activities.first.img})`, backgroundSize: 'cover', height: '100%' }} >
                        {activities.first.title}
                    </div>
                    <div className='first-activity' style={{ width: '100%', backgroundPosition: 'center', backgroundImage: `url(${activities.second.img})`, backgroundSize: 'cover', height: '100%' }} >
                        {activities.second.title}
                    </div>
                    <div className='first-activity' style={{ width: '100%', backgroundPosition: 'center', backgroundImage: `url(${activities.third.img})`, backgroundSize: 'cover', height: `100%` }} >
                        {activities.third.title}
                    </div>
                </>
            }
            {activities.msg && activities.msg}

        </div>
    )
}

export default Activity
