import React ,{ useState } from "react";
import contactImg from "./images/contact.svg"
import "./contact.css"

function Contact() {
    const [inputs ,setInputs] = useState({});
    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]: value}))
    };
    const handleSendMail = (e) =>{
        e.preventDefault();
        const mailtoLink = MailLink();

        window.open(mailtoLink,"_blank");

        setTimeout(() => {
            setInputs({});
        },500);
    };

    const MailLink = () =>{
        const subject = encodeURIComponent("Message from " + inputs.clientname);
        const body = encodeURIComponent(`Name: ${inputs.clientname}\nEmail: ${inputs.Email}\nMobile Number: ${inputs.Number}\nMessage: ${inputs.Massage}`);
        return `mailto:maheswara215mora@gmail.com?subject=${subject}&body=${body}`;
    };

    return(
        <section class="contact" id="contact">
            <div class="contact-head">
                <h1>Get In <span>Touch</span></h1>
                <p>Want to get in touch? We'd love to hear from you.</p>
            </div>
            <div class="contact-container">
                <div class="contactImg">
                <img src={contactImg} alt="Img" />
                </div>
                <div class="contact-body">
                    <form onSubmit={handleSendMail}>
                        <lable>Name:</lable>
                        <input type="text" name = "clientname" value={inputs.clientname} onChange ={handlechange} placeholder="Your name" required />
                        <lable>Email:</lable>
                        <input type="Email" name ="Email" value={inputs.Email} onChange={handlechange} placeholder="exampl123@gmail.com" required />
                        <lable>Mobile Number:</lable>
                        <input type="tel" name="Number" value={inputs.Number} onChange={handlechange} placeholder="876-675-2735" required />
                        <lable>Massage:</lable>
                        <textarea rows = "3" name = "Massage" value={inputs.Massage} onChange={handlechange} placeholder="type your massage" required />
                        <button type="submit">Send Mail</button>
                    </form>
                </div>
            </div>
            </section>
    );
};

export default Contact;