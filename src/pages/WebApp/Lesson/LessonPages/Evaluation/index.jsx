import React from 'react'
import { Link } from 'react-router-dom'
import './Evaluation.css'

const Evaluation = () => {

    return (
        <div className='evaluation-cont'>
            <h1>Advocacy Campaign Evaluation</h1>
            <div className="eval-cont Website-eval">
                <h2>Advocacy Campaign Evaluation</h2>
                <p>
                    This website took a while to create. You can't make something like this with
                    with any common drag-and-drop website builders. We also enjoyed uploading content
                    and activities for participants, such as yourself, to take part in to help our big
                    blue planet a better place to live in. <span className="strike">And also prevent 
                    it from becoming the next new Mars.</span> As such, we would like to ask your 
                    thoughts about this website and the activities we have released throughout the weeks 
                    so we could better improve in the future. Any suggestions and recommendations are 
                    greatly appreciated. 
                </p>
                <p>please answer the google form Link: <Link target='_blank' rel="noopener noreferrer" to={{ pathname: 'https://forms.gle/9J9eRywQTzZs7xAS6' }}>https://forms.gle/9J9eRywQTzZs7xAS6</Link></p>
            </div>
            <div className="eval-cont seminar-eval">
                <h2>Seminar Evaluation</h2>
                <p>
                    We would like to thank everyone once again who joined and participated in our seminar. It was a great
                    opportunity to be able to meet all of the participants who have signed up in our advocacy campaign
                    and who share the same feeling of responsibility for our planet. Hopefully what we did here will not
                    only stay within this small group but also to other social media sites. Global warming is a thing and
                    the more people know about it, the more we can do something about it. We would like to hear from all of
                    you who have joined our seminar and your thoughts about our presentation. Any recommendations and suggestions
                    will be greatly appreciated.
                </p>
                <p>Please answer the google form Link: <Link target='_blank' rel="noopener noreferrer" to={{ pathname: 'https://forms.gle/uLHWg63jdFHhk7BG9' }}>https://forms.gle/uLHWg63jdFHhk7BG9</Link></p>
            </div>
        </div>
    )
}

export default Evaluation