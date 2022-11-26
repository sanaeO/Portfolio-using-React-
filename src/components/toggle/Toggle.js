
import './toggle.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context';

function Toggle()
{
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    function toggle()
    {
       theme.dispatch({ type : "TOGGLE"})
    }
 return (
    <>
    <div class='toggle'>
    <div class="clicked" onClick={toggle} style={{ transform :  darkMode &&  'translateX(100%)' }} ></div>
        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/moon.png"/>
       
        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/sun.png" />
    </div>
    </>
 );
}
export default Toggle;