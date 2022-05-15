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
      <div className="table-cont">
        <div className="table-cont-header">
          <h1 className="cont-header">Participants</h1>
        </div>
        <div className="table-content">
          <div className="table-actions">

          </div>
          <table>
            <thead>
              <tr>
                <th className='header-checkbox-cont'><input type="checkbox" /></th>
                <th>Participants</th>
                <th>Task 1</th>
                <th>Task 2</th>
                <th>Task 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Participant