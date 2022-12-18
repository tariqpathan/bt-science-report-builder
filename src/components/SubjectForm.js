import React, {Component} from 'react'

class SubjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            null:null
        }
        const subjects = ["biology", "chemistry", "physics"]
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <form name="subject-form">
                <select name="select-subject">
                    // create a for loop using subjects
                    <option value="Biology" className="biology">Biology</option>
                    <option value="Chemistry" className="biology">Chemistry</option>
                    <option value="Physics" className="biology">Physics</option>
                </select>
            
                <div>
                    <p>HW Progress</p>
                    <input type="radio" name="Done"/>Done
                    <input type="radio" name="Not Done"/>Not Done
                    <input type="radio" name="Incomplete"/>Incomplete
                    <input type="checkbox" name="Inconsistent"/>Inconsistent
                </div>

                <div>
                    <p>Test Results</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Average
                    <input type="radio" name=""/>Below Average
                    <input type="radio" name=""/>Unsatisfactory
                </div>

                <div>
                    <p>Understanding</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Average
                    <input type="radio" name=""/>Below Average
                    <input type="radio" name=""/>Unsatisfactory
                </div>

                <div>
                    <p>Maths Skills</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Average
                    <input type="radio" name=""/>Below Average
                    <input type="radio" name=""/>Unsatisfactory
                </div>

                <div>
                    <p>Application of Knowledge</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Average
                    <input type="radio" name=""/>Below Average
                    <input type="radio" name=""/>Unsatisfactory
                </div>

                <div>
                    <p>Practical Knowledge</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Average
                    <input type="radio" name=""/>Below Average
                    <input type="radio" name=""/>Unsatisfactory
                </div>

                <div>
                    <p>HW Quality</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Satisfactory
                    <input type="radio" name=""/>Unsatisfactory
                    <input type="checkbox" name="Inconsistent"/>Inconsistent
                </div>

                <div>
                    <p>Test Pace</p>
                    <input type="radio" name=""/>Good
                    <input type="radio" name=""/>Satisfactory
                    <input type="radio" name=""/>Unsatisfactory
                </div>
                
                <div>
                    <p>Specific Topics</p>
                    <input type="checkbox"/>Moles Calculations
                    <input type="checkbox"/>Unit Conversions
                    <input type="checkbox"/>Formula Skills
                    <input type="checkbox"/>Balancing Equations
                    <input type="checkbox"/>Scientific Terms
                </div>

                <div>
                    <p>Mistakes</p>
                    <input type="checkbox"/>Workbook
                    <input type="checkbox"/>Structured
                </div>
            
            </form>
        )
    }
}

export default SubjectForm