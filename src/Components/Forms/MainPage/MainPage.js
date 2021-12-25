import React, { Component } from 'react'
import First from '../FirstPage/FirstPage'
import Second from '../SecondPage/SecondPage'
import Third from '../ThirdPage/ThirdPage'
import Fourth from '../FourthPage/FourthPage'
import Fifth from '../FifthPage/FifthPage'
import Final from '../FinalPage/FinalPage'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: '',
            email: '',
            mobile: '',
            linkedin: '',

            exp1_org: '',
            exp1_pos: '',
            exp1_desc: '',
            exp1_start_date: '',
            exp1_end_date: '',

            exp2_org: '',
            exp2_pos: '',
            exp2_desc: '',
            exp2_start_date: '',
            exp2_end_date: '',

            proj1_title: '',
            proj1_link: '',
            proj1_desc: '',

            proj2_title: '',
            proj2_link: '',
            proj2_desc: '',

            proj3_title: '',
            proj3_link: '',
            proj3_desc: '',

            proj4_title: '',
            proj4_link: '',
            proj4_desc: '',

            edu1_school: '',
            edu1_year: '',
            edu1_qualification: '',
            edu1_marks: '',

            edu2_school: '',
            edu2_year: '',
            edu2_qualification: '',
            edu2_marks: '',

            skills: '',
            language: '',
            status: 0,

        }
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };
    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }
    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })
    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (<>
                    <First
                        values={this.state}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                </>
                );
            case 2:
                return (
                    <>
                        <Second
                            values={this.state}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}

                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <Third
                            values={this.state}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}

                        />
                    </>
                );
            case 4:
                return (
                    <>
                        <Fourth
                            values={this.state}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}

                        />
                    </>
                )
            case 5:
                return (
                    <>
                        <Fifth
                            values={this.state}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            submitted={this.submitted}
                            handleChange={this.handleChange}

                        />
                    </>
                )
                case 6:
                    return(
                        <>
                        <Final />
                        </>
                    )

        }
    }
}

export default MainPage
