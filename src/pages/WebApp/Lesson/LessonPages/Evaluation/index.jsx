import React from 'react'
import { Link } from 'react-router-dom'
import './Evaluation.css'

const Evaluation = () => {

    return (
        <div className='evaluation-cont'>
            <h1>Advocacy Campaign Evaluation</h1>
            <div className="eval-cont Website-eval">
                <h2>Website Evaluation</h2>
                <p>
                    This website took a while to create. You can't make something like this with
                    with just common drag-and-drop website builders. As such, we would like to 
                    ask your thoughts about this website from the home page with parallax and 
                    smooth scrolling to our main web app where you can participate in our activities
                    and track your progress throughout the campaign. Any suggestions and
                    recommendations are greatly appreciated. 
                </p>
                <p>please answer the google form Link: <Link target='_blank' rel="noopener noreferrer" to={{ pathname: 'https://forms.gle/9J9eRywQTzZs7xAS6' }}>https://forms.gle/9J9eRywQTzZs7xAS6</Link></p>
            </div>
            <div className="eval-cont poster-eval">
                <h2>Poster Evaluation</h2>
                <p>
                    If you have noticed, we have also uploaded some posters into our website. You can check them
                    in the <Link to='/app'>Dashboard</Link> if you havent. They are really beautiful and informative
                    and we hope you learned a thing or two after seeing it. We also want to hear from you and your
                    thoughts about our posters so feel free to answer the google form below.
                </p>
                <p>Please answer the google form Link: <Link target='_blank' rel="noopener noreferrer" to={{ pathname: '' }}>[google form poster link]</Link></p>
            </div>
            <div className="eval-cont poster-eval">
                <h2>Planting Activity Evaluation</h2>
                <p>
                    Thank you for all of those who participated in our planting activity. It was heartwarming to see
                    a lot of people working together to make this planet a better place, one plant at a time. Hopefully
                    the plants we have cultivated will grow into something big that would help reduce the large amount
                    of Carbon dioxide within our atmosphere. What are your thoughts about this simple activity? Do you
                    have any ideas in which we can help make it better? We'd like to hear from you. Please share your
                    thoughts on the google form link below. 
                </p>
                <p>Please answer the google form Link: <Link target='_blank' rel="noopener noreferrer" to={{ pathname: '' }}>[google form planting activity link]</Link></p>
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