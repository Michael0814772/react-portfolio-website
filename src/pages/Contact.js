import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import emailjs from 'emailjs-com'

const Result = () => {
    return (
        <p>Your message has been sent successfully. I will contact you soon.</p>
    )
}

function Contact() {

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_orecgn8', 'template_j41pb6q', e.target, 'user_TNcna0cG0xTXc6PZTV31p')
            .then((result) => {
                ;
            }, (error) => {
               ;
        });
        e.target.reset();
        showResult(true)
    };

    setTimeout(() => {
        showResult(false)
    }, 5000)


    return (
        <div>
            <Header />

            <div className="container contact mt-5">

                <div className="row pt-5">

                    <div className="col-md-6 p-5">
                        <img src="./contactus.svg" alt="contact us" />
                    </div>
                    <div className="col-md-6">

                        <div className='contact-form m-2 p-5 n-box2'>

                            <h3 className='font-bold'>Contact US</h3>
                            <hr />
                            <form onSubmit={sendEmail}>
                                <input type="text" className='form-control' placeholder='FullName' name='fullName' />
                                <input type="text" className='form-control' placeholder='Phone Number' name='phone' />
                                <input type="text" className='form-control' placeholder='Email' name='email' />

                                <textarea className='form-control' name='message' rows={3} defaultValue={""} placeholder='Enter your message'></textarea>

                                <button className='primary-button mt-5'>SUBMIT</button>
                                <div className='mt-5'>{result ? <Result/> : null}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
