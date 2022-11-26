import "./contact.css"
import { useRef } from "react"
import emailjs from "emailjs-com"
import { useContext } from "react";
import { ThemeContext } from '../../context';

function Contact ()
{
    // Dark Mode : 
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode ;

    const form = useRef();

    function sendEmail(e)
    {
        e.preventDefault();

        emailjs.sendForm('service_g36en7l', 'template_7ycr12u', form.current, 'Z7tQiif-He6X4nEPR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    return(
        <>
        <div class="contact">
            <div class="container">
        <div class="left">
        <h2>Let's Discuss your Project</h2>
        <div class="line">
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/email.png"/>
        +111 34 56 78 90
        </div>
        <div class="line">
        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/phone.png" />  
           contact@sana.com
            </div>
        <div class="line">
        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/address.png" />
    245 king street , Victoria Australia
        </div>
        </div>
        <div class="right">
            <p>
                <span>What's your story ?</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name='user_name' style={{ backgroundColor : darkMode && '#222' , color : darkMode && "#FFF"}}/>
                <input type="text" placeholder="Subject" name="user_subject"  style={{ backgroundColor : darkMode && '#222' , color : darkMode && "#FFF"}}/>
                <input type="email" placeholder="Email" name="user_email"  style={{ backgroundColor : darkMode && '#222' , color : darkMode && "#FFF"}}/>
                <textarea placeholder="Your message" name="user_message"  style={{ backgroundColor : darkMode && '#222' , color : darkMode && "#FFF"}}></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
        </div>
        </>
    );
}
export default Contact;