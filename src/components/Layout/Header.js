import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import hero from '../../assets/hero.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
     <header className={classes.header}>
          <h1>Omnia Meals</h1>
          <HeaderCartButton />
     </header>
     <div className={classes['main-image']}>
          <img src={hero} alt='hero'/>
     </div>
    </Fragment>
  )
}

export default Header