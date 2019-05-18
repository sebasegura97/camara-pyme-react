import Layout from "./components/layout";
import React from 'react';
import Step1 from './components/hazte-miembro/step1'
import Step2 from './components/hazte-miembro/step2'
import Step3 from './components/hazte-miembro/step3'
import Step4 from './components/hazte-miembro/step4'
import Step5 from './components/hazte-miembro/step5'
import { connect } from 'react-redux'

class Membership extends React.Component {
    
    render() {
        console.log("step from render", this.props.step)
        var step = () =>{ 
            switch(this.props.step){
                case 1: 
                return <Step1 />
                case 2: 
                return <Step2 />
                case 3: 
                return <Step3 />
                case 4: 
                return <Step4 />
                case 5: 
                return <Step5 />
                default:
                return
            }
        }
        return (
            <div>
                {step()}
                {/* <Step
                 */}
            </div>
           
        );
    }
}

function mapStateToProps(state){
    return{
        step: state.membership.step
    }
}

export default connect(mapStateToProps)(Membership)