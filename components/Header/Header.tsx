import Image from 'next/image'
import logo from '../../public/logo/logo-black.png'
import ReactTypingEffect from 'react-typing-effect'


export type HeaderType = {
    name: string,
}

const Header = ({
    name,
}: HeaderType) => {
    return (
        <section className="tk-header">
            <div className="mb-3">
                <div className='d-flex align-items-center'>
                    <div className="tk-header__logo-container">
                        <Image
                            alt="banner"
                            src={logo}
                            placeholder="blur"
                            quality={100}
                        />
                    </div>

                    <div className='tk-header__name-container'>
                        <div className="tk-header__title-main">
                            {name}
                        </div>
                        <div className="tk-header__title-sub mb-1">
                            <ReactTypingEffect
                                eraseDelay={1000}
                                typingDelay={1000}
                                text={["Frontend Engineer.", "Fullstack Engineer.", "Product Engineer.", "Creative."]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;