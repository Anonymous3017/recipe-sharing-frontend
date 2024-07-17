
import './Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <>

      <div className="navbar">

        <div className='title'>
          FOODIE
        </div>


        <div className='links'>
          <div className='list1'>
            <ul className='list'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#recipe">Recipe</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div>
              <ShoppingCartOutlinedIcon />
            </div>

          </div>
        </div>

      </div>


    </>
  )
}

export default Navbar