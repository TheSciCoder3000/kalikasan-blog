import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { markdownToDraft } from 'markdown-draft-js'
import { useSelector, useDispatch } from 'react-redux'
import draftjsToHtml from 'draftjs-to-html'
import { Previous, Refresh } from '../svg'
import './Detail.css'
import { fetchParticipants } from '../../../../../redux'

const ParticipantDetail = () => {
    const dispatch = useDispatch()
    const { participantId } = useParams()
    const participantData = useSelector(state => state.participants.data.find(participant => participant.id === participantId))
    const globalTasks = useSelector(state => state.task.data)

    // useEffect(() => {
    //     if (participantId) getDb('Users', participantId).then(snapshot => {
    //         setParticipantData(snapshot.data())
    //     })
    // }, [participantId])

    const introData = participantData?.tasks.find(task => task.lessonId === 'Introduction')
    const plantingData = participantData?.tasks.find(task => task.lessonId === 'Planting')

    return participantData && (
        <div className='participant-detail-page'>
            <div className="page-controls">
                <Link className='back-participant-list' to='/app/admin/participants'><Previous /></Link>
                <button onClick={() => dispatch(fetchParticipants())} className="refresh-page"><Refresh /></button>
            </div>
            <h1 className="page-header">{participantData.FirstName} {participantData.LastName}</h1>
            <div className="main-info">
                <p className="participant-id"><strong>ID: </strong>{participantId}</p>
                <p className="participant-email"><strong>EMAIL:</strong>{participantData.email}</p>
            </div>
            <div className="activity-group-cont">   
                {introData &&
                    <div className="activity-item-cont intro-activity">
                        <h3 className="activity-title">
                            {globalTasks.find(task => task.lessonId === 'Introduction')?.title}
                        </h3>
                        <div className="activity-content intro-content" 
                            dangerouslySetInnerHTML={{ __html: draftjsToHtml(markdownToDraft(introData.value)) }}/>
                    </div>
                }
                {plantingData && 
                    <div className="activity-item-cont planting-activity">
                        <h3 className="activity-title">
                            {globalTasks.find(task => task.lessonId === 'Planting')?.title}
                        </h3>
                        <div className="planting-content">
                            <img src={plantingData.value} alt="" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ParticipantDetail