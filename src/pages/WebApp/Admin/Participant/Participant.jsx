import { useEffect, useState } from 'react'
import { getQueryDb } from '../../../../firebase'
import './Participant.css'

const Participant = () => {
  const [participantList, setParticipantList] = useState([])

  useEffect(() => {
    getQueryDb('Users', { field: 'admin', eq: '==', value: false }).then(snapshot => {
      setParticipantList(state => [...state, ...snapshot.docs.map(doc => doc.data())])
    })
  }, [])
  return (
    <div className='participant-cont'>
      Participant
    </div>
  )
}

export default Participant