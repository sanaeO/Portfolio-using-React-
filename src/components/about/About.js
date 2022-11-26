
import "./about.css"
import about from "../../images/about.jpg"
import award from "../../images/award.png"
function About()
{
    return (
   <>
   <section class="about">
    <div class="container">
        {/* Bg image  */}
        <div class="image">
        <div class="bg-image"></div>
        {/* Image  */}
        <div class="img">
            <img src={about} />
        </div>
        </div>
       
        <div class="info">
            <h2>About Me </h2>
            <p>Le lorem ipsum est, en imprimerie,
                 une suite de mots sans signification 
                 le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la</p>
                 <p>
                    Acquire skills to land my first job after graduation , A new graduate seeking to establish
                 </p>
                 <div class="award">
                 <img src={award} />
                 <div class="award-text">
                 <h4>Internationl Design Awards 2021</h4>
                 <p>venant remplacer le faux-texte dès qu'il est prêt ou que</p>
                </div>
                </div>
               
        </div>
    </div>
   </section>
   </>
    );
}

export default About;