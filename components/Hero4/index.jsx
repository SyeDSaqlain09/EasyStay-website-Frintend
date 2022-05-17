import styles from '../../styles/components/Hero_three/Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import world from '../../assets/static/world.jpg';
import { Image } from 'react-bootstrap';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import room1 from '../../assets/static/room1.webp';
import room2 from '../../assets/static/rom2.jpg';
import room3 from '../../assets/static/room3.jpg';
import room4 from '../../assets/static/room4.jpg';
function Hero_four() {
    return (
        <>
            <div style={{ background: '#810709' }}>
                <div style={{ width: '100%', height: '200px', borderTop: '1px solid black' }}>
                    <h1 className={styles.search} style={{ color: 'white' }}> Search <span style={{ fontStyle: 'italic' }}>Hotel</span></h1>

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
                <Container fluid>
                    <div style={{ background: '#FFFFFF', width: '100%', padding: '20px', borderRadius: '10px'}}>
                        <Row>
                            <Col>
                                <h1>Easy Stay Deluxe</h1>
                                <p>
                                    <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '20px' }} /> &nbsp;
                                    Kahna Nau, Gajummata
                                </p>
                            </Col>
                            <Row>
                                <Col sm={5}>
                                    <Image src={room1.src} style={{ width: '100%', borderRadius: '10px',height: '100%'}}/>
                                </Col>
                                <Col sm={7}>
                                    <Image src={room2.src} style={{ width: '100%', borderRadius: '10px'}} />
                                    <div style={{marginTop:'10px'}}>
                                        <Row >
                                            <Col sm={6} >
                                                <Image src={room3.src} style={{ width: '100%', borderRadius: '10px'}} />
                                            </Col>
                                            <Col sm={6} >
                                                <Image src={room4.src} style={{ width: '100%', borderRadius: '10px', height: '100%' }} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                    <Row>
                       
                        <Col sm={8}>

                            <div style={{ background:'#EEEAE9' ,borderRadius:'10px', marginTop:'50px', padding:'10px',}}>
                                <Row style={{display:'flex', alignItems:'center'}}>

                                    <Col xs={12} md={12}>
                                        <h3>Lahore : 8 Rooms found</h3>
                                    </Col>
                                

                                </Row>
                           </div>
                            <div style={{ background: '#EEEAE9', borderRadius: '10px', marginTop: '10px', padding: '10px', }}>
                                <Row>
                                    <Col sm={5}>
                                        <Image src={world.src} style={{width : '100%'}} />
                                    </Col>
                                    <Col sm={4}>
                                        <h3>Easy stay Deluxe</h3>
                                        <p>
                                            <FontAwesomeIcon icon={faLocationDot}/> &nbsp;
                                            Kahna Nau Gajummata
                                        </p>
                                    </Col>
                                    <Col sm={3}>
                                        <div style={{ borderLeft:'1px solid #810709', padding: '20px'}}>

                                            <h1>5000 PKR</h1>
                                            <p style={{fontWeight:'bold'}}>
                                                1 Room /Night
                                            </p>
                                            <button className={'btn btn'} style={{ background: '#810709', color :' white'}}>Book Now</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ background: '#EEEAE9', borderRadius: '10px', marginTop: '10px', padding: '10px', }}>
                                <Row>
                                    <Col sm={5}>
                                        <Image src={world.src} style={{ width: '100%' }} />
                                    </Col>
                                    <Col sm={4}>
                                        <h3>Easy stay Deluxe</h3>
                                        <p>
                                            <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
                                            Kahna Nau Gajummata
                                        </p>
                                    </Col>
                                    <Col sm={3}>
                                        <div style={{ borderLeft: '1px solid #810709', padding: '20px' }}>

                                            <h1>5000 PKR</h1>
                                            <p style={{ fontWeight: 'bold' }}>
                                                1 Room /Night
                                            </p>
                                            <button className={'btn btn'} style={{ background: '#810709', color: ' white' }}>Book Now</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div style={{ background: '#EEEAE9', borderRadius: '10px', marginTop: '10px', padding: '10px', }}>
                                <Row>
                                    <Col sm={5}>
                                        <Image src={world.src} style={{ width: '100%' }} />
                                    </Col>
                                    <Col sm={4}>
                                        <h3>Easy stay Deluxe</h3>
                                        <p>
                                            <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
                                            Kahna Nau Gajummata
                                        </p>
                                    </Col>
                                    <Col sm={3}>
                                        <div style={{ borderLeft: '1px solid #810709', padding: '20px' }}>

                                            <h1>5000 PKR</h1>
                                            <p style={{ fontWeight: 'bold' }}>
                                                1 Room /Night
                                            </p>
                                            <button className={'btn btn'} style={{ background: '#810709', color: ' white' }}>Book Now</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>


                            

                        </Col>
                        <Col sm={4}>
                            <div style={{ background: '#FFFFFF', width: '100%', height: '400px', padding: '20px', borderRadius: '10px', marginTop:'50px'}}>
                                <h3>Filter</h3>
                                <div style={{ background: '#E7E7E7', padding: '10px', margin: '0px', borderRadius: '5px' }}>
                                    <p style={{ margin: '0px' }}>Hotel Name</p>
                                </div>
                                <div style={{ background: '#E7E7E7', padding: '10px', margin: '0px', borderRadius: '5px', marginTop: '10px' }}>
                                    <p style={{ margin: '0px' }}>Price</p>
                                    <p style={{ margin: '0px' }}>PKR 1500 - PKR 15000</p>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: '30px', height: '30px', background: '#810709', borderRadius: '50%' }}></div>
                                        <div style={{ width: '270px', height: '10px', background: '#797878', marginTop: '10px' }}></div>
                                        <div style={{ width: '30px', height: '30px', background: '#810709', borderRadius: '50%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <div style={{ width: '100%', height: '400px', background: '#810709' }}></div>
                <div style={{ width: '100%', height: '100px', background: '#810709' }}></div>
            </div>
        </>
    )
}

export default Hero_four