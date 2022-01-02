import React, { Component } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header imgUrl='/assets/img/background.jpg' carrousel={true} />
                <Main title='MYTINERARY' subtitle='DESIGNED BY INSIDERS WHO KNOW AND LOVE THEIR CITIES' home={true} city={false} page='home' />
                <Footer />
            </>
        )
    }
}
