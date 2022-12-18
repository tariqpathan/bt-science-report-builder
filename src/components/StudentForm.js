import React, { Component } from 'react'

class Test extends Component {
    
    constructor(props) {
        super(props)
        this.state= {
            message: "Heyyy"
        }
    }
    
    changeMessage() {
        this.setState({
            message: 'Byeee'
        })
    }
    

    render() {
        return (
        <form>
            <div>
                Name: <input type="text"/>
            </div>
            <div>
                <p>Improve HW By:</p>
                <input type="checkbox"/> Revising at home
                <input type="checkbox"/> Reading questions carefully
                <input type="checkbox"/> Asking more questions
            </div>
            <div>
                <p>Issues:</p>
                <input type="checkbox"/> Class and test progress
                <input type="checkbox"/> HW Not done/inconsistent
                <input type="checkbox"/> Test related topics
            </div>
            <div>
                <p>Unsatisfactory Behaviours</p>
                <input type="checkbox"/> Talkative
                <input type="checkbox"/> Interrupting other tables
                <input type="checkbox"/> Speaking loudly
                <input type="checkbox"/> Laughing during lesson
                <input type="checkbox"/> Poor effort/Tired
                <input type="checkbox"/> Day dreaming
                <input type="checkbox"/> Ignoring instructions
                <input type="checkbox"/> Not listening
                <input type="checkbox"/> Poor language
                <input type="checkbox"/> Misbehaving


            </div>
            <div>
                <p>Class Concentration</p>
                <input type="radio"/> Good
                <input type="radio"/> Satisfactory
            </div>
            <div>
                <p>Class Behaviour</p>
                <input type="radio"/> Good
                <input type="radio"/> Satisfactory
            </div>
            <div>
                <p>Attendance</p>
                <input type="radio"/> Good
                <input type="radio"/> Satisfactory
                <input type="radio"/> Unatisfactory
            </div>
            <div>
                <p>Ability</p>
                <input type="radio"/> Good
                <input type="radio"/> Average
                <input type="radio"/> Below Average
                <input type="radio"/> Slow Learner
            </div>
            <div>
                <p>Handwriting</p>
                <input type="radio"/> Satisfactory
                <input type="radio"/> Unsatisfactory
            </div>

            Notes: <input type="textarea"/>
            Parents Comments: <input type="textarea"/>


        </form>
        )
        
    }
}

export default Test