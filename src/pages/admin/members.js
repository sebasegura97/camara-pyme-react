// import Layout from '../../components/admin/admin-layout'
import React from 'react'
import { connect } from 'react-redux'
import { getMembers } from '../../firebase/firestore'
import { addMember, searchMember } from '../../redux/actions'
import MemberRow from './components/member-row'
import MemberFull from './components/member-full'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Members extends React.Component{
    state = {
        memberFull: false,
        selectedMember: {},
        searching: false
    }
    componentWillMount() {
        getMembers().then((members) => {
            this.props.dispatch(addMember(members))
        })
    }
    showFullMember = (member) => {
        this.setState({
            selectedMember: member,
            membeFull: true
        })
        console.log(member)
    }
    goBack = () => {
        this.setState({
            membeFull: false,
            selectedMember: {}
        })
    }
    rowBackgroundColor = (pagos) => {
        var today = new Date();
        var backgroundColor = "white"
        if (pagos.length === 0 ){
            return backgroundColor = "rgba(255,0,0,0.3)"
        } else {
            var lastPayment = pagos[pagos.length - 1].toDate()
            console.log("today", today)
            console.log("lastPayment", lastPayment)
            if (today.getMonth() >= lastPayment.getMonth() + 1) {
                console.log('es del mes pasao')
                if (today.getDate() >= 10 ) {
                    console.log("pago vencido")
                    backgroundColor = "rgba(255,0,0,0.3)"
                } else {
                    console.log("el pago se vencera pronto")
                    backgroundColor = "yellow"
                }
            } else {
                console.log("el pago esta actualizado")
                backgroundColor = "rgba(0,172,205,0.2)"
            }
            if (today.getFullYear() > lastPayment.getFullYear()) {
                console.log("es del año pasao")
                backgroundColor = "rgba(255,0,0,0.3)"
            }
            return backgroundColor
        }
    }
    onSearch = (e) => {
        this.props.dispatch(searchMember(e.target.value))
        if( e.target.value.length > 0 ){
            this.setState({ searching: true })
        } else {
            this.setState({ searching: false })
        }
    }

    render(){
        var {admin} = this.props
        var items = [];
        this.state.searching ? items = this.props.search : items = this.props.members;
        if (!admin) {
            this.props.history.push("/admin/")
        }
        if (!this.state.membeFull){
            return(
                <div>
                    <InputGroup className="my-4">
                        <Input 
                            placeholder="Buscar" 
                            onChange={(e)=> this.onSearch(e) } />
                        <InputGroupAddon addonType="append">🔍</InputGroupAddon>
                    </InputGroup>
                    {
                        items.map(
                            (member, index) => {
                                var bgColor = this.rowBackgroundColor(member.ultimoPago)
                                return(
                                    <MemberRow 
                                        key={index}
                                        member={member}
                                        bgColor = {bgColor}
                                        onClick={() => this.showFullMember(member)}
                                    />
                                )
                            }
                        )
                    }
                </div> 
            )
        } else{
            return(
                <div>
                    <MemberFull 
                        member={this.state.selectedMember}
                        goBack={this.goBack}
                    />
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        members: state.membership.members,
        search: state.membership.search,
        admin: state.membership.admin
    }
}

export default connect(mapStateToProps)(Members)