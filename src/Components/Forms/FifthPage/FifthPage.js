import React, { Component } from 'react'
import axios from 'axios'
import saveAs from 'file-saver'
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
class FifthPage extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    formSubmit = (e) => {
        e.preventDefault();
        this.props.submitted();
        this.props.nextStep();
        const data = this.props.values;


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <form className='Form' onSubmit={this.formSubmit}>
                    <div className='headerTitle'>
                        <span>Skills and Languages</span>
                    </div>
                    <div className="formWrapper">
                        <span className='FormSpan'>
                            <label>Skills*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='Separate each skill with a space and a comma'
                                    name="skills"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.skills}
                                />
                                <div className="label">Skills <PsychologyIcon/> </div>
                                <div className='info'>Separate each skill with a space and a comma</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Language*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter all the Language you know'
                                    name="language"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.language}
                                />
                                <div className="label">Language <LanguageIcon/> </div>
                                <div className='info'>Enter all the Language you know</div>
                            </div>
                        </span>
                        <br />
                        <hr />
                        <span id='submitSpan'>
                            <button onClick={this.back} id='back'>Back</button>
                            <button type='submit'>Create PDF</button>
                        </span>
                        </div>
                        </form>
            </div>
        )
    }
}

export default FifthPage
