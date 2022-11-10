import { useState } from 'react';
import Section from './original/Section';
import Footer from './original/Footer'
import Form from './Form';

/* <form>
                   <input placeholder='Name' type="text"></input><br></br>
                   <input placeholder='Email'type="text"></input><br></br>
                   <input placeholder='Type Message Here' type="text"></input><br></br>
                   <input type="submit"></input>
                </form> */


function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [thanks, setThanks] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value);
      }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
      }
      

      const addName = (event) => {
        event.preventDefault();
        setThanks(`Thanks for reaching out ${name}!`)
        setName('');
        setEmail('');
        setMessage('');
      };

    return (
        <>
            <Section />
            <div className='Contact'>
                <h3>Please Fill out the form below to contact me</h3> <br></br>
                <Form name={name} email={email} message={message} 
                        handleEmailChange={handleEmailChange} handleMessageChange={handleMessageChange} handleNameChange={handleNameChange} 
                        addName={addName} /> <br></br>
                <h4>{thanks}</h4>
                <br></br>
            </div>
            
            <Footer />
        </>
    )
}

export default Contact