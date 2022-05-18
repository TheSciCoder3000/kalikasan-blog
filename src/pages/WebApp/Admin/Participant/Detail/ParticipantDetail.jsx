import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDb } from '../../../../../firebase'

const ParticipantDetail = () => {
    const { participantId } = useParams()
    const [participantData, setParticipantData] = useState(null)

    useEffect(() => {
        if (participantId) getDb('Users', participantId).then(snapshot => {
            setParticipantData(snapshot.data())
        })
    }, [participantId])

    return participantData && (
        <div className='participant-detail-page'>
            
        </div>
    )
}

export default ParticipantDetail