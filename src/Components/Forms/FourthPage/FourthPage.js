import React, { Component } from 'react'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LinkIcon from '@mui/icons-material/Link';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Block from './FourthBlock'
class FourthPage extends Component {
    constructor(props){
        super(props);
        this.state={
            project:[],
            count:0,
        }
    }
    addProj=()=>{
        this.setState({project:[...this.state.project,<Block/>]})
    }
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
                        <span>Project Details</span>
                    </div>
                    <div className="formWrapper">
                        <span className="Number">
                            <AssignmentTurnedInIcon />
                        </span>
                        <span className='FormSpan'>
                            <label>Project Title*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    maxLength="150"
                                    title='enter name of max length 150'
                                    name="proj1_title"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.proj1_title}
                                />
                                <div className="label">Project Title </div>
                                <div className='info'>Max length 150</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Project Link*</label>
                            <div className='wrapper'>
                                <input
                                    type="text"
                                    required
                                    title='enter Complete URL'
                                    name="proj1_link"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.proj1_link}
                                />
                                <div className="label">URL <LinkIcon/> </div>
                                <div className='info'>Enter Complete URL</div>
                            </div>
                        </span>
                        <span className='FormSpan'>
                            <label>Project Description*</label>
                            <div className='wrapper'>
                                <textarea
                                    type="text"
                                    required
                                    maxLength="150"
                                    title='enter name of max length 150'
                                    name="proj1_desc"
                                    onChange={handleChange}
                                    defaultValue={values.status === 1 ? '' : values.proj1_desc}
                                />
                                <div className="label">Project Desc <LibraryBooksIcon/> </div>
                                <div className='info'>Describe your Project</div>
                            </div>
                        </span>
                        { [...Array(this.state.count)].map((_, i) => <Block key={i} handleChange={this.props.handleChange} a={this.state.count} values={this.props.values} />) }
                        {this.state.count<3?<div style={{ flexFlow: "row nowrap", alignItems: "center" }}>
                            <span>Add Poject</span><AddCircleIcon onClick={()=>this.setState({count:this.state.count+1}) } style={{ cursor: "pointer" }} />
                            {/* {console.log(this.state.count)} */}
                        </div>:<></>}
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

export default FourthPage
