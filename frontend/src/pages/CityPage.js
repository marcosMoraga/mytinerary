import React, { Component } from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import './CityPage.css'
import Collapse from '../components/Collapse';
import { toast } from 'react-toastify';
import CommentForm from '../components/CommentForm';
import Activities from '../components/Activity'

class CityPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            city: {
                img: '-',
                name: '-'
            },
        }
    }

    componentDidMount = async () => {
        this.props.rdxrequest(this.props.params.id)
        if (this.props.rdxCities.length > 0) {
            this.setState({ city: this.props.rdxCities.find(city => city._id === this.props.params.id) })
        }
        else {
            const res = await this.props.rdxrequestCity(this.props.params.id)
            this.setState({ city: res })
        }

    }
    convertPrice(price) {
        let icon
        switch (price) {
            case 1:
                icon = <i className="fas fa-money-bill"></i>
                return icon
            case 2:
                icon = (<div className='price-icon-container'><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i></div>)
                return icon
            case 3:
                icon = (<div className='price-icon-container'><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i></div>)
                return icon
            case 4:
                icon = (<div className='price-icon-container'><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i></div>)
                return icon
            case 5:
                icon = (<div className='price-icon-container'><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i><i className="fas fa-money-bill"></i></div>)
                return icon
            default:
                new Error("Invalid price")
        }
    }

    handlerLike = async (itineraryID) => {
        const userLiked = await this.props.rdxLike(itineraryID)
        userLiked.error && toast.warning(userLiked.error)
    }
    render() {
        return (
            <>
                {this.state.city.img && <Header imgUrl={this.state.city.img} />}
                <section>
                    <h1>ITINERARIES</h1>
                    <article className="itineraries-container" >
                        <div className='itineraries-control-panel'>
                            {this.props.rdxItineraries.length > 0 && this.props.phone && <i className="fa fa-chevron-up" aria-hidden="true"></i>}
                            {this.props.rdxItineraries.length > 0 && !this.props.phone && <i className="fa fa-chevron-left" aria-hidden="true"></i>}
                        </div>
                        {(this.props.rdxItineraries.length > 0 && this.props.rdxItineraries[0].user) && this.props.rdxItineraries.map(itinerary => (
                            <div key={itinerary._id} className='itinerary' >

                                <div className='header-itinerary'>
                                    <div className='user-identify'>
                                        <h2>{itinerary.user.name}</h2>
                                        <div style={{ backgroundImage: `url(${itinerary.user.img})`, borderRadius: '50%' }} className='user-img'></div>
                                    </div>
                                </div>
                                <div className='body-itinerary'>
                                    <div className='title'>
                                        <h2>{itinerary.title}</h2>
                                    </div>
                                    <div className='atributes'>
                                        <h2>
                                            <span>
                                                <i className="fas fa-hourglass-start"></i>{itinerary.duration}hrs
                                            </span>
                                            <span>
                                                price{this.convertPrice(itinerary.price)}
                                            </span>
                                            <span>
                                                <button onClick={() => this.handlerLike(itinerary._id)}>
                                                    {localStorage.getItem('token') ? (itinerary.likes.includes(this.props.rdxUserId) ? <i style={{ color: 'red' }} className="fas fa-heart"></i> : <i className="far fa-heart"></i>) : <i className="far fa-heart"></i>} {itinerary.likes.length}
                                                </button>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className='footer-itinerary'>
                                    <div className='hashtags'>
                                        <h2>
                                            {itinerary.hashtags.map(hashtag => <span key={hashtag}>{hashtag}</span>)}
                                        </h2>
                                    </div>
                                </div>
                                <div className='interactions'>
                                    <div className='itinerary-comments'>
                                        <Collapse title='comments' label={<i className="far fa-comments"></i>}>
                                            <div className='comments'>
                                                <CommentForm itineraryID={itinerary._id} />
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className='itinerary-activities'>
                                        <Collapse title='activities' label={<i className="fas fa-hiking"></i>}>
                                            <div className='activities'>
                                                <Activities itineraryID={itinerary._id} />
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='itineraries-control-panel'>
                            {this.props.rdxItineraries.length > 0 && this.props.phone && <i className="fa fa-chevron-down" aria-hidden="true"></i>}
                            {this.props.rdxItineraries.length > 0 && !this.props.phone && <i className="fa fa-chevron-right" aria-hidden="true"></i>}
                        </div>
                        {(this.props.rdxItineraries.length === 0) && <h2 className='no-itinerary'>No itineraries are available yet</h2>}
                    </article>
                    <article className="back">
                        <Link to='/cities' className='all-citi' >
                            <h2 >back to cities</h2>
                        </Link>
                    </article>
                </section>
            </>
        );
    }
}










const mapStateToProps = (combineReducers) => {
    return {
        rdxItineraries: combineReducers.itinerariesReducer.itineraries,
        rdxCities: combineReducers.citiesReducer.cities,
        rdxUserId: combineReducers.userReducers.userID
    }
}

const mapDispatchToProps = {
    rdxrequestCity: citiesActions.requestCity,
    rdxrequest: itinerariesActions.requestItineraries,
    rdxLike: itinerariesActions.likeHandler
}
export default connect(mapStateToProps, mapDispatchToProps)(CityPage)
