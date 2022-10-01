const Footer = () => {
    return (
        <section className="tk-footer">
            <div className='container'>
                <div className="d-flex justify-content-center">
                    <a target="_blank" href={"https://www.linkedin.com/in/thirawit-kaeophirom-7937a6b7/"} rel="noopener noreferrer">
                        <div className="tk-footer__icon-container">
                            <i className="tk-icon-linkedin" />
                        </div>
                    </a>
                    <a target="_blank" href={"https://www.facebook.com/trawit.indy/"} rel="noopener noreferrer">
                        <div className="tk-footer__icon-container">
                            <i className="tk-icon-facebook" />
                        </div>
                    </a>
                    <a target="_blank" href={"https://twitter.com/t4iiz_atadia"} rel="noopener noreferrer">
                        <div className="tk-footer__icon-container">
                            <i className="tk-icon-twitter" />
                        </div>
                    </a>
                    <a target="_blank" href={"https://www.instagram.com/thirawit.k/"} rel="noopener noreferrer">
                        <div className="tk-footer__icon-container">
                            <i className="tk-icon-instagram" />
                        </div>
                    </a>
                    <a target="_blank" href={"tel:+66924298797"} rel="noopener noreferrer">
                        <div className="tk-footer__icon-container">
                            <i className="tk-icon-phone" />
                        </div>
                    </a>
                </div>
                <div className="tk-footer__credit">powered by me.</div>
            </div>
        </section>
    );
}

export default Footer;