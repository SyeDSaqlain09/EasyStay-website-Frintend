import styles from '../../styles/components/Hero_two/Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TourImage2 from '../../assets/static/Nanga-Parbat.webp';

function Hero_two() {
    return (
        <>
            <div style={{ background: '#810709' }}>
                <div style={{  width: '100%', height: '450px', borderTop: '1px solid black' }}>
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
                <div>
                    <div className={'d-flex align-items-center my-4 p-5'} style={{ background: `url(${TourImage2.src})`, width: '100%', height: '400px' }}>
                        <div style={{}}>
                            <h1>Be a part of </h1>
                            <h1><span style={{ fontStyle: 'italic', color: '#810709' }}>Adventures</span></h1>
                        </div>
                    </div>
                </div>
                <div className={`${styles.backdiv}`}>
                    <div className={'d-flex align-items-center justify-content-center'}>
                        <h1 style={{ color: 'white' }}>How  <span style={{ fontStyle: 'italic' }}>Online Hotel Booking Made</span> Easy </h1>
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
                   
                </div>

                
                <div style={{ width: '100%', height: '400px', background: '#810709' }}></div>
                <div style={{ width: '100%', height: '100px', background: '#810709' }}></div>
            </div>
        </>
    )
}

export default Hero_two