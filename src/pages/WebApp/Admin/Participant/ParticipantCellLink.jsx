import React from 'react'
import { Link } from 'react-router-dom'

const ParticipantCellLink = ({ participantId, participantName }) => {
  return (
    <Link to={`/app/admin/participants/${participantId}`}>{participantName}</Link>
  )
}

export default ParticipantCellLink