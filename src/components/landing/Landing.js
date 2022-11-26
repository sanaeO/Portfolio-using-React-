import "./landing.css"
// import me from "../landing/components/images/me.jpg"
import me from "../../images/me1.jfif"
function Landing()
{

    return (
        <>
        <section class="landing">
            <div class="left-wrapper">
        <div class="info">
            <h3>Hello , My Name is </h3>
            <h2>Sanae Ouhmou</h2>
            <div class="wrapper">
                <ul class="wrapper-items">
                 <li class="wrapper-item">Front End Developer</li>
                 <li class="wrapper-item">Back End Developer</li>
                 <li class="wrapper-item">Business intelligence developer</li>
                </ul>
            </div>
            <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
            </p>
            <div class="icon">
            <i class="fa-solid fa-computer-mouse"></i>
            </div>

        
        </div>
   
        </div>
        <div class="image">
            <div class="background"></div>
           <img src={me} />
        </div>
        </section>
        
        </>
    );
}
export default Landing;