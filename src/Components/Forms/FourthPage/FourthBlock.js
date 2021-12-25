import React from 'react'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LinkIcon from '@mui/icons-material/Link';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import '../Form.css'

function FourthBlock(props) {
    const { values, handleChange,a } = props;
    let title='';
    let link='';
    let d='';
    if((a+1)===2)
    {
        title=values.proj2_title;
        link=values.proj2_link;
        d=values.proj2_desc;
    }
    else if((a+1)==3){
        title=values.proj3_title;
        link=values.proj3_link;
        d=values.proj3_desc;
    }
    else if((a+1)==4){
        title=values.proj4_title;
        link=values.proj4_link;
        d=values.proj4_desc;
    }
   
    return (
        
        <div>
            <br/>
            <br />
            <span className="Number">
                <AssignmentTurnedInIcon />
            </span>
            <span className='FormSpan'>
                <label>Project Title</label>
                <div className='wrapper'>
                    <input
                        type="text"
                        maxLength="150"
                        title='enter title of max length 150'
                        name="proj1_title"
                        onChange={handleChange}
                        defaultValue={values.status === 1 ? '' : title}
                    />
                    <div className="label">Project Title </div>
                    <div className='info'>Max length 150</div>
                </div>
            </span>
            <span className='FormSpan'>
                <label>Project Link</label>
                <div className='wrapper'>
                    <input
                        type="text"
                        title='enter Complete URL'
                        name="proj1_link"
                        onChange={handleChange}
                        defaultValue={values.status === 1 ? '' : link}
                    />
                    <div className="label">URL <LinkIcon /> </div>
                    <div className='info'>Enter Complete URL</div>
                </div>
            </span>
            <span className='FormSpan'>
                <label>Project Description</label>
                <div className='wrapper'>
                    <textarea
                        type="text"
                        maxLength="150"
                        title='enter name of max length 150'
                        name="proj1_desc"
                        onChange={handleChange}
                        defaultValue={values.status === 1 ? '' : d}
                    />
                    <div className="label">Project Desc <LibraryBooksIcon /> </div>
                    <div className='info'>Describe your Project</div>
                </div>
            </span>
        </div>
    )
}

export default FourthBlock
