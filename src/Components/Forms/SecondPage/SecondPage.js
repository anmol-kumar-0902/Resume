import React, { Component } from 'react'
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import '../Form.css'
export class SecondPage extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <form className='Form' onSubmit={this.continue}>
                    <div className='headerTitle'>
                        <span>Educational Details</span>
                    </div>
                    <div className="formWrapper">
                        <span className="Number">
                            1.
                        </span>
                        <span className='FormSpan'>
                            <label>College/University*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter name of max length 100'
                                    name="edu1_school"
                                    maxLength="100"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu1_school}
                                />
                                <div class="label">College Name <SchoolIcon/></div>
                                <div className='info'>Max length 100</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Year*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter your passing year'
                                    name="edu1_year"
                                    pattern="[0-9]{4}"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu1_year}
                                />
                                <div class="label">Passing year<CalendarTodayIcon/></div>
                                <div className='info'>YYYY</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Qualification*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter Qualification'
                                    name="edu1_qualification"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu1_qualification}
                                />
                                <div class="label">Your Qualification <LocalLibraryIcon/></div>
                                <div className='info'>e.g. B.Tech in CSE</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>CGPA/%*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter your passing year'
                                    name="edu1_marks"
                                    maxLength="7"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu1_marks}
                                />
                                <div class="label">Enter your Aggr. CGPA/% <CardMembershipIcon/></div>
                                <div className='info'>CGPA/%</div>
                            </div>
                        </span>
                        <br />
                        <span className="educationNumber">
                            2.
                        </span>
                        <span className='FormSpan'>
                            <label>College/University*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter name of max length 100'
                                    name="edu2_school"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu2_school}
                                />
                                <div class="label">College Name </div>
                                <div className='info'>Max length 100</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Year*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter your passing year'
                                    name="edu2_year"
                                    pattern="[0-9]{4}"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu2_year}
                                />
                                <div class="label">Passing year </div>
                                <div className='info'>YYYY</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Qualification*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter Qualification'
                                    name="edu2_qualification"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu2_qualification}
                                />
                                <div class="label">Your Qualification </div>
                                <div className='info'>e.g. B.Tech in CSE</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>CGPA/%*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter your passing year'
                                    name="edu2_marks"
                                    maxLength="7"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.edu2_marks}
                                />
                                <div class="label">Enter your Aggr. CGPA/%</div>
                                <div className='info'>CGPA/%</div>
                            </div>
                            <br />
                        <hr />
                        </span>
                        <span id='submitSpan'>
                        <button onClick={this.back} id='back'>Back</button>
                        <button type='submit'>Next</button>
                        </span>

                    </div>

                </form>
            </div>
        )
    }
}

export default SecondPage
