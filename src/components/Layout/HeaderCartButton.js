import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onClick}) => {
  return (
     <button className={classes.button} 
     onClick={onClick}
     >
          <span className={classes.icon}>
               <CartIcon />
          </span>
          <span>You Cart</span>
          <span className={classes.badge}>
               3
          </span>
     </button>
  )
}

export default HeaderCartButton