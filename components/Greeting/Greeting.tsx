import Link from 'next/link'
import Image from 'next/image'
import bluepi from '../../public/images/bluepi.png'


export type GreetingType = {
    name: string,
    position: string,
    updated: string,
    current: string,
    location: string,
    strengths: string[],
    greetings: string,
}

const Greeting = ({
    name,
    position,
    updated,
    current,
    location,
    strengths,
    greetings,
}: GreetingType) => {
    return (
        <section className="tk-greeting">
            <div className="pt-3 mb-3">
                <div className="tk-greeting__title-main">
                    {name}
                </div>
                <div className="tk-greeting__title-main mb-1">{position}</div>
                <div className="tk-greeting__sub-job mb-3">
                    {updated}
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="d-flex">
                            <div className="tk-greeting__image-circle">
                                <Image
                                    alt="banner"
                                    src={bluepi}
                                    placeholder="blur"
                                    quality={100}
                                />
                            </div>
                            <div>
                                <div className="tk-greeting__head-job">COMPANY</div>
                                <div className="tk-greeting__sub-job">{current}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tk-greeting__head-job">LOCATION</div>
                        <div className="tk-greeting__sub-job">{location}</div>
                    </div>
                </div>
                <div className="tk-greeting__tag-container mb-3">
                    {strengths.map((item, index) => (
                        <div key={index} className="tk-greeting__tag">{item}</div>
                    ))}
                </div>
                <div className="tk-greeting__divider"></div>
            </div>
            <div className="mb-3">
                <code>{greetings}</code>
            </div>
        </section>
    );
}

export default Greeting;