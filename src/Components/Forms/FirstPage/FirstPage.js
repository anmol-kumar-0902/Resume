import React, { Component } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Form.css'

class FirstPage extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (

            <div>

                <form className='Form' onSubmit={this.continue}>
                    <div className='headerTitle'>
                        <span>Enter Personal Details</span>
                    </div>
                    <div className='formWrapper'>
                        <span className='FormSpan'>
                            <label>Name</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter name of max length 50'
                                    name="name"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.name}
                                />
                                <div class="label">Enter Name<PersonIcon /> </div>
                                <div className='info'>Max length 50</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Email id</label>
                            <div className='wrapper'>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.email} />
                                <div class="label">Enter Email <EmailIcon /></div>
                                <div className='info'>Use correct email format [abc@def.ghi]</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Mobile No.</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    name="mobile"
                                    pattern="[0-9]{10}"

                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.mobile}
                                />
                                <div class="label">Enter Mobile<CallIcon /></div>
                                <div className='info'>Enter 10 digit number</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Linkedin Id</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    name="linkedin"
                                    minLength="6"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.linkedin} />
                                <div class="label">Enter Linkedin Id<LinkedInIcon /></div>
                                <div className='info'>Enter Linkedin id only </div>
                            </div>
                        </span>
                        <br />
                        <hr />
                        <span id='submitSpan'>
                        <button type='submit'>Next</button>
                        </span>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default FirstPage
