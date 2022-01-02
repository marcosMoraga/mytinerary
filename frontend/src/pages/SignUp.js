import React, { Component } from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import RegisterForm from '../components/RegisterForm'
import Header from '../components/Header'
import SideBar from '../components/SideBar';
import { toast } from 'react-toastify';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newUser: {},
            errors: {

            }
        }
    }

    handlerAddUser = async (user) => {
        const isADD = await this.props.rdxAddUser(user)
        if (isADD.succes) {
            this.props.navigate('/')
            toast.success('Your are registered!')
        } else {
            let issues = {}
            if (isADD.issues.error === 'El email ya esta en uso') return toast.error('email en uso')

            isADD.issues.validate.forEach(error => {
                let key = error.context.key
                issues[key] = error.message
            })
            this.setState({ errors: issues })
        }
    }

    render() {
        return (
            <>
                <Header imgUrl='/assets/img/sign-up.jpg' />
                <div className='container-signIn-form'>
                    <SideBar />
                    <RegisterForm errors={this.state.errors} handlerAddUser={this.handlerAddUser} />
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        rdxUserName: state.userReducers.userName
    }
}
const mapDispatchToProps = {
    rdxAddUser: userActions.addUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)