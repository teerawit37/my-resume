import Link from 'next/link';
import IconButton from '../Element/IconButton';

const Footer: React.FC = () => {
  return (
    <section className="tk-footer">
      <div className="container">
        <div className="d-flex justify-content-center">
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/thirawit-kaeophirom-7937a6b7/"}
            rel="noopener noreferrer"
          >
            <IconButton icon="tk-icon-linkedin"></IconButton>
          </a>
          <a
            target="_blank"
            href={"https://www.facebook.com/trawit.indy/"}
            rel="noopener noreferrer"
          >
            <IconButton icon="tk-icon-facebook"></IconButton>
          </a>
          <a
            target="_blank"
            href={"https://twitter.com/t4iiz_atadia"}
            rel="noopener noreferrer"
          >
            <IconButton icon="tk-icon-twitter"></IconButton>
          </a>
          <a
            target="_blank"
            href={"https://www.instagram.com/thirawit.k/"}
            rel="noopener noreferrer"
          >
            <IconButton icon="tk-icon-instagram"></IconButton>
          </a>
          <a target="_blank" href={"tel:+66924298797"} rel="noopener noreferrer">
            <IconButton icon="tk-icon-phone"></IconButton>
          </a>
          <Link href="/file/Thirawit_CV.pdf">
            <a download>
              <IconButton icon="tk-icon-download"></IconButton>
            </a>
          </Link>
        </div>
        <div className="tk-footer__credit">powered by me.</div>
      </div>
    </section>
  );
};

export default Footer;