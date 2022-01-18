import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
import me from '../../public/images/itsme.png'

const Header = () => {
    const [isActive, setAcrive] = React.useState<boolean>(false);
    const handleActive = () => {
        setAcrive(!isActive);
        console.log(isActive)
    }
    return (
        <div className="tk-header">
            <i onClick={() => handleActive()} className={`${isActive ? 'tk-icon-times' : 'tk-icon-phone'} tk-header__menu-icon`} />
            <button className={`tk-header__button ${isActive ? 'tk-header__button--active' : ''}`}></button>
            <div className={`tk-header__info-container ${isActive ? 'tk-header__info-container--active' : ''}`}>
                <Image
                    alt="banner"
                    src={me}
                    placeholder="blur"
                    quality={100}
                />
                <div className="tk-header__title">CONTACT</div>
                <div className="tk-header__data-container">
                    <a href="tel:+66924298797" target="_blank" rel="noreferrer" className="d-flex p-1 tk-header__link">
                        <i className="tk-icon-phone-square tk-header__icon me-1" />
                        <div className="tk-header__text">+66 924298797</div>
                    </a>
                    <a href="mailto:t-rawit@hotmail.com" target="_blank" rel="noreferrer" className="d-flex p-1 tk-header__link">
                        <i className="tk-icon-envelope tk-header__icon me-1" />
                        <div className="tk-header__text">t-rawit@hotmail.com</div>
                    </a>
                    <a href="https://www.linkedin.com/in/thirawit-kaeophirom-7937a6b7/" target="_blank" rel="noreferrer" className="d-flex p-1 tk-header__link">
                        <i className="tk-icon-linkedin-square tk-header__icon me-1" />
                        <div className="tk-header__text">Linkedin</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;