import React from 'react'

function Contact() {
    return (
        <div id='contact'>
        <h1>Book Your Table</h1>
        <form>
            
            <input type="text" placeholder='Full Name'/>
            <input type="email" placeholder='Email'/>
            <textarea placeholder="Write here..."></textarea>
            <input type='Submit' vbalue='BOOK'/>
        </form>
            
        </div>
    )
}

export default Contact;
