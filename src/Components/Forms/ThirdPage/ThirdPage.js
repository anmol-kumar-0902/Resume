import React, { Component } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../Form.css'
export class ThirdPage extends Component {
    constructor() {
        super();
        this.state = {
            present: true,
            cd: "anmol",
            ycolor: "#ced4da",
            ncolor: "#ced4da",
            add: false,
            disp: "flex"
        }
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    check = (e) => {
        e.preventDefault();
        this.setState({ present: true, ncolor: "#fff", ycolor: "#38b000" });
        const today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        this.props.values.exp1_end_date = (dd + '-' + mm + '-' + yyyy);
    }
    nocheck = (e) => {
        e.preventDefault();
        this.setState({ present: false, ycolor: "#fff", ncolor: "#dc2f02" });

        this.props.values.exp1_end_date = '';
    }
    addfun = (e) => {
        e.preventDefault();

        this.setState({ disp: "none" })
        this.setState({ add: true })
    }
    addExp = () => {
        return <div>
            <br />
            <br />
            <span className="Number">
                2.
            </span>
            <span className='FormSpan'>
                <label>Organisation</label>
                <div className='wrapper'>
                    <input
                        type="text"
                        title='enter name of max length 100'
                        name="exp2_org"
                        onChange={this.props.handleChange}
                        defaultValue={this.props.values.status === 1 ? '' : this.props.values.exp2_org}
                    />
                    <div className="label">Organisations Name </div>
                    <div className='info'>Max length 100</div>
                </div>
            </span>
            <span className='FormSpan'>
                <label>Position</label>
                <div className='wrapper'>
                    <input
                        type="text"
                        title='enter name of max length 60'
                        name="exp2_pos"
                        onChange={this.props.handleChange}
                        defaultValue={this.props.values.status === 1 ? '' : this.props.values.exp2_pos}
                    />
                    <div className="label">Your Role </div>
                    <div className='info'>Max length 60</div>
                </div>
            </span>
            <span className='FormSpan'>
                <label>Start Date</label>
                <div className='wrapper'>
                    <input
                        type="date"
                        title='dd-mm-yyyy'
                        name="exp1_start_date"
                        onChange={this.props.handleChange}
                        defaultValue={this.props.values.status === 1 ? '' : this.props.values.exp2_start_date}
                    />
                    <div className='info'>dd-mm-yyyy</div>
                </div>
            </span>
            <span className='FormSpan'>
                <label>End Date</label>
                <div className='wrapper'>
                    <input
                        type="date"
                        max='2050-01-01'
                        title='dd-mm-yyyy'
                        name="exp2_end_date"
                        onChange={this.props.handleChange}
                        defaultValue={this.props.values.status === 1 ? '' : this.props.values.exp2_end_date}
                    />
                    <div className='info'>dd-mm-yyyy</div>
                </div>
            </span>
            <span className='FormSpan'>
                <label>Dsecription</label>
                <div className='wrapper'>
                    <textarea
                        type="text"
                        required
                        maxLength="400"
                        title='max length 400'
                        name="exp2_desc"
                        onChange={this.props.handleChange}
                        defaultValue={this.props.values.status === 1 ? '' : this.props.values.exp2_desc}
                    />
                    <div className="label">Describe your work</div>
                    <div className='info'>Max length 400</div>
                </div>
            </span>
        </div>

    }

    render() {

        const { values, handleChange } = this.props;
        return (
            <div>
                <form className='Form' onSubmit={this.continue}>
                    <div className='headerTitle'>
                        <span>Experience Info</span>
                    </div>
                    <div className="formWrapper">
                        <span className="educationNumber">
                            1.
                        </span>
                        <span className='FormSpan'>
                            <label>Organisation*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter name of max length 100'
                                    name="exp1_org"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.exp1_org}
                                />
                                <div className="label">Organisations Name </div>
                                <div className='info'>Max length 100</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Position*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter name of max length 60'
                                    name="exp1_pos"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.exp1_pos}
                                />
                                <div className="label">Your Role </div>
                                <div className='info'>Max length 60</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Start Date*</label>
                            <div className='wrapper'>
                                <input
                                    type="date"
                                    required
                                    title='dd-mm-yyyy'
                                    name="exp1_start_date"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.exp1_start_date}
                                />
                                <div className='info'>dd-mm-yyyy</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Presently Working*</label>
                            <div className='wrapper btnn'>
                                <button onClick={this.check} style={{ backgroundColor: this.state.ycolor }}>yes</button>
                                <button onClick={this.nocheck} style={{ backgroundColor: this.state.ncolor }} >No</button>
                                <div className='info'>dd-mm-yyyy</div>
                            </div>
                        </span>
                        {this.state.present ? <></> :
                            <span className='FormSpan'>
                                <label>End Date*</label>
                                <div className='wrapper'>
                                    <input
                                        type="date"
                                        max='2050-01-01'
                                        required
                                        title='dd-mm-yyyy'
                                        name="exp1_end_date"
                                        onChange={handleChange}
                                        defaultValue={values.status === 1 ? '' : values.exp1_end_date}
                                    />
                                    <div className='info'>dd-mm-yyyy</div>
                                </div>
                            </span>
                        }
                        <span className='FormSpan'>
                            <label>Dsecription*</label>
                            <div className='wrapper'>
                                <textarea
                                    type="text"
                                    required
                                    maxLength="400"
                                    title='max length 500'
                                    name="exp1_desc"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.exp1_desc}
                                />
                                <div className="label">Describe your work</div>
                                <div className='info'>Max length 400</div>
                            </div>
                        </span>
                        <div style={{ display: this.state.disp, flexFlow: "row nowrap", alignItems: "center" }}>
                            <label>Add experience</label><AddCircleIcon onClick={this.addfun} style={{ cursor: "pointer" }} />
                        </div>
                        {console.log(this.state.add)}
                        {this.state.add ? this.addExp() : <></>}
                        <br />
                        <hr />
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

export default ThirdPage
