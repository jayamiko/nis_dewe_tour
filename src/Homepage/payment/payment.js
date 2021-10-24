import './payment.css';
import Navbar from '../../Component/Navbar/navbar'
import Footer from '../../Component/Footer/footer'
import Icon from '../../Image/Icon.png'

function Payment() {
    return (
        <>
            <Navbar />
            <div className="container">
                <>
                    <div className="container mt-5">
                        <div className="card">
                            <div className="card-body p-5">
                                <div className="d-flex justify-content-between p-0 m-0">
                                    <img src={Icon} alt="icon" />
                                    <h4 className="card-title">Booking</h4>
                                </div>
                                <div className="d-flex justify-content-end p-0 m-0">
                                    <h6 className="card-text"><b>Saturday,</b> 22 July 2021</h6>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div className="card-body p-0 m-0">
                                        <h4 className="bold">6D/4N Fun Tassie Vacation</h4>
                                        <p>Australia</p>
                                        <span className="badge bg-danger p-2">Waiting Payment</span>
                                    </div>
                                    <div className="card-body d-flex flex-column p-0 m-0">
                                        <h6 className="bold">Date Trip</h6>
                                        <p>26 Agustus 2020</p>
                                        <h6 className="bold">Accommodation</h6>
                                        <p>Hotel 4 Nights</p>
                                    </div>
                                    <div className="card-body d-flex flex-column p-0 m-0">
                                        <h6 className="bold">Duration</h6>
                                        <p>6 Day 4 Night</p>
                                        <h6 className="bold">Transportation</h6>
                                        <p>Qatar Airways</p>
                                    </div>
                                    <div className="card-body d-flex align-items-end flex-column p-0 m-0">
                                        <img className="inv" src={''} alt="Invoice" />
                                        <p>Upload payment proof</p>
                                    </div>
                                </div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Barak Obama</td>
                                            <td>Male</td>
                                            <td>08221000112</td>
                                            <td className="bold">Qty : 1</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-end mb-0 mt-4">
                                    <h5>Total : <b className="text-danger">IDR {12390000}</b></h5>
                                </div>
                            </div>
                        </div>
                        {/* <div className="d-flex justify-content-end mb-0 mt-5">
                        </div> */}
                    </div>
                </>

            </div>
            <Footer />
        </>
    )
}

export default Payment;