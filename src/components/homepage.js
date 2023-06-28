import './homepage.css';
import { db } from './firebase';
import React,{usestate} from "react";
function homepage(){
const[ name,setName] = usestate("");
const[ email,setEmail] = usestate("");
const[ subject,setSubject] = usestate("");
const[ message,setMessage] = usestate("");
const handleSubmit = (e)=>{
    e.preventDefault();
    db.collection('contacts').add({
        name: name,
        email: email,
        subject: subject,
        message:message,
    })
    .then(()=>{
        alert('Message is submitted');
    })
    .catch(error => {
        alert('error.message')
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
}
    return(
    <>
    <form onSubmit={handleSubmit}>
                    <div class="form">
                        <div class="input-flex">
                            <div class="input-1">
                            <input type="text"placeholder="Name"name="name"value={name}
                            onchange={(e) =>setName(e.target.value) }
                            /> 
                            </div>
                            <div class="input-2">
                                <input type="email"placeholder="Email"name="email"value={email}
                                onchange={(e) =>setEmail(e.target.value)}
                                />
                            </div>       
                            <div class="input-3">
                                <input type="subject"placeholder="Subject"name="subject"value={subject}
                                onchange={(e) =>setSubject(e.target.value)}
                                />
                            </div>
                            <div class="input-4">
                                <input type="text"placeholder="Message"name="message"value={message}
                                onchange={(e) =>setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div >
                            <button type="submit"><p classname="buttton">Submit</p></button>
                        </div>
                        </div>
                          
                            </form>




    </>
    );
}
export default homepage;