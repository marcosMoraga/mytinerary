import React, { Component } from 'react';
import Header from '../components/Header'
import Main from '../components/Main'
import citiesActions from '../redux/actions/citiesActions'
import { connect } from 'react-redux'



class Cities extends Component {

    render() {
        return (
            <>
                <Header imgUrl='/assets/img/backy.jpeg' />
                <Main actionFilter={this.props.rdxfilter} auxiliar={this.props.rdxauxiliar} cities={this.props.rdxcities} page='city' title='CITIES' subtitle='FIND YOUR WAY AND KEEP THE JOURNEY ON' home={false} city={true} />

            </>
        );
    }
}
const mapStateToProps = ({ citiesReducer }) => {

    return {
        rdxcities: citiesReducer.cities,
        rdxauxiliar: citiesReducer.auxiliary
    }
}

const mapDispatchToProps = {
    rdxfilter: citiesActions.filter,
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)
