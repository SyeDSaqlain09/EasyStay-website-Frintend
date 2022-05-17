import styles from '../../styles/components/Hero/Hero.module.css';
import TourImage from '../../assets/static/tours-travel.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TourImage2 from '../../assets/static/Nanga-Parbat.webp';
import cardImage from '../../assets/static/card1.jpg';
import { Card } from 'react-bootstrap';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <>
            <div style={{ background: '#810709' }}>
                <div style={{ background: `url(${TourImage.src})`, width: '100%', height: '450px' }}>
                    <h1 className={styles.search} style={{ color: 'white' }}> Search <span style={{ fontStyle: 'italic', color: '#810709' }}>Hotel</span></h1>

                    <div className={`${styles.inner}`}>
                        <div className={`${styles.moreInner} d-flex align-items-center justify-content-between`}>
                            <input type="text" name="enterCity" placeholder="Enter City" className={`${styles.placeholder} form-control`} />
                            <input type="date" name="checkIn" placeholder="Check In" className={`${styles.placeholder} form-control`} />
                            <input type="date" name="checkOut" placeholder="Check Out" className={`${styles.placeholder} form-control`} />
                            <input type="text" name="room" placeholder="Room" className={`${styles.placeholder} form-control`} />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.Icon} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'d-flex align-items-center my-4 p-5'} style={{ background: `url(${TourImage2.src})`, width: '100%', height: '400px' }}>
                        <div style={{}}>
                            <h1>Book Hotels with Pakistan</h1>
                            <h1>Biggest <span style={{ fontStyle: 'italic', color: '#810709' }}>Toruism Platform</span></h1>
                        </div>
                    </div>
                </div>
                <div className={`${styles.backdiv}`}>
                    <div className={'d-flex align-items-center justify-content-center'}>
                        <h2> Our <span style={{ fontStyle: 'italic', color: '#810709' }}>Featured</span> Hotels</h2>
                    </div>
                    <div className={'d-flex align-items-center justify-content-center p-2'}>
                        <Card style={{ width: '12rem', backgroundColor: '#1D1F22', color: 'white', borderRadius: '0px' }}>
                            <Card.Img variant="top" src={cardImage.src} />
                            <Card.Body style={{ backgroundColor: '#09090A' }}>
                                <Card.Title>
                                    <center>LUXURY<br></br>
                                        APPARTMENTS
                                        <br></br>
                                        <FontAwesomeIcon icon={faStar} className={styles.star} />
                                        <FontAwesomeIcon icon={faStar} className={styles.star} />
                                        <FontAwesomeIcon icon={faStar} className={styles.star} />
                                        <FontAwesomeIcon icon={faStar} className={styles.star} />
                                        <FontAwesomeIcon icon={faStar} className={styles.star} />
                                    </center></Card.Title>

                                <Card.Text style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '13px' }}>$</span>
                                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>299</span>
                                    <span>/night</span>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        

                    </div>
                </div>
                <div className={`${styles.discounts} d-flex align-items-center justify-content-between my-4 p-5 `}>
                    <div>
                        <h1>Get Amazing <span style={{ fontStyle: 'italic', color: '#810709' }}>Deals & Discounts</span> </h1>
                        <h1>By Booking Through Our App</h1>
                    </div>
                    <div style={{ width: '20%', height: '350px', backgroundColor: 'gray' }}>

                    </div>
                </div>
                <div>
                    <div className={'d-flex align-items-center justify-content-center'}>
                        <h1 style={{ color: 'white' }}>How  <span style={{ fontStyle: 'italic' }}>Online Hotel Booking Made</span> Easy </h1>
                    </div>
                    <div className={'d-flex align-items-center justify-content-center'}>
                        <div className={`${styles.circle}`}></div>
                        <div className={`${styles.circle}`} style={{ marginLeft: '10px' }}></div>
                        <div className={`${styles.circle}`} style={{ marginLeft: '10px' }}></div>
                        <div className={`${styles.circle}`} style={{ marginLeft: '10px' }}></div>
                        <div className={`${styles.circle}`} style={{ marginLeft: '10px' }}></div>
                    </div>
                </div>

                <div className={`${styles.backdiv} my-5`}>
                    <div className={'d-flex align-items-center justify-content-center'}>
                        <h2> Upcoming <span style={{ fontStyle: 'italic', color: '#810709' }}>National</span> &
                        <span style={{ fontStyle: 'italic', color: '#810709' }}> International </span> event</h2>
                    </div>
                    <div className={'d-flex align-items-center justify-content-center p-2'}>
                        <Card style={{ width: '18rem', backgroundColor: '#1D1F22', color: 'white', borderRadius: '0px' }}>
                            {/* <Card.Img variant="top" src={cardImage.src} /> */}
                            <div style={{width : '18rem', height: '200px'}}></div>
                            <Card.Body style={{ backgroundColor: '#810709' }}>
                                <Card.Title>
                                    
                                    <p style={{ margin: '0px' }}>
                                            <b>
                                                One amazing week in Paradise Hotel
                                            </b>
                                        </p>
                                        
                                </Card.Title>
                                <small className={styles.small}>
                                    We know how to paper our Guests
                                </small>

                                <hr></hr>

                                <Card.Text>
                                   <div className={'d-flex align-items-center justify-content-between'}>
                                        <div>
                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                            3 Days to go
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faMessage} />&nbsp;
                                            27
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faHeart} />&nbsp;
                                            82
                                        </div>
                                   </div>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        
                    </div>
                   
                </div>
                <div style={{ width: '100%', height: '400px', backgroundColor: '#D1D1D1' }}></div>
                <div style={{ width: '100%', height: '100px', backgroundColor: '#FCFCFC'}}></div>
            </div>
        </>
    )
}

export default Hero