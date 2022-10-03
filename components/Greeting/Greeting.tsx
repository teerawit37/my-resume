import Image from 'next/image'
import atadia from '../../public/images/atadia.png';
import { Card } from '../Card';

export type strengthsType = {
    frontend: string[];
    backend: string[];
    web3: string[];
    design: string[];
    softskill: string[];
}

export type GreetingType = {
    greetings: string,
    current: string,
    location: string,
    position: string,
    frontendstr: string[],
    backendstr: string[],
    web3str: string[],
    designstr: string[],
    softstr: string[],
    exp: JobsType[]
}

export type JobsType = {
    position: string,
    company: string;
    period: string;
    address: string;
    link: string;
}

export type InfoType = {
    name: string,
    position: string,
    updated: string,
    current: string,
    location: string,
    greetings: string,
    strengths: strengthsType
}

const Greeting = ({
    position,
    greetings,
    current,
    location,
    frontendstr,
    backendstr,
    web3str,
    designstr,
    softstr,
    exp
}: GreetingType) => {
    const handleAfterChange = (e: any) => {
        console.log(e.index);
        console.log(e.dir);
    };
    return (
        <section className="tk-greeting">
            <div className="mb-2">
                <div className="tk-greeting__title-main">
                    <div className='tk-greeting__arrow' />
                    <div className='tk-greeting__arrow tk-greeting__arrow--red' />
                    <div className='tk-greeting__arrow tk-greeting__arrow--last' />
                    <span>ABOUT ME</span>
                </div>
                <div className="mb-3">
                    <code className="tk-greeting__message">{greetings}</code>
                </div>
                <div className="tk-greeting__divider"></div>
            </div>
            <div className="mb-2">
                <div className="tk-greeting__title-main">
                    <div className='tk-greeting__arrow' />
                    <div className='tk-greeting__arrow tk-greeting__arrow--red' />
                    <div className='tk-greeting__arrow tk-greeting__arrow--last' />
                    <span>CURRENT</span>
                </div>
                <div className="tk-greeting__work-title">{position} · Full-time</div>
                <div className='row mb-3'>
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <div className="tk-greeting__image-circle">
                                <Image
                                    alt="banner"
                                    src={atadia}
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
                    <div className="col-6 mb-2">
                        <div className="tk-greeting__head-job">LOCATION</div>
                        <div className="tk-greeting__sub-job">{location}</div>
                    </div>
                </div>
                <div>
                    <div className="tk-greeting__title-main">
                        <div className='tk-greeting__arrow' />
                        <div className='tk-greeting__arrow tk-greeting__arrow--red' />
                        <div className='tk-greeting__arrow tk-greeting__arrow--last' />
                        <span>EXP</span>
                    </div>
                    <div className="tk-greeting__carousel">
                        <div className="tk-greeting__viewport">
                            {exp.map((item, key) => (
                                <div key={key} className='tk-greeting__slide'>
                                    <Card
                                        title={item.position}
                                        subtitle={item.company}
                                        period={item.period}
                                        address={item.address}
                                        link={item.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="tk-greeting__title-main">
                <div className='tk-greeting__arrow' />
                <div className='tk-greeting__arrow tk-greeting__arrow--red' />
                <div className='tk-greeting__arrow tk-greeting__arrow--last' />
                <span>SKILL</span>
            </div>
            <div className="tk-greeting__tag tk-greeting__tag--red">Frontend Skills</div>
            <div className="tk-greeting__tag-container mb-3">
                {frontendstr.map((item, index) => (
                    <div key={index} className="tk-greeting__tag">{item}</div>
                ))}
            </div>
            <div className="tk-greeting__tag tk-greeting__tag--red">Backend Skills</div>
            <div className="tk-greeting__tag-container mb-3">
                {backendstr.map((item, index) => (
                    <div key={index} className="tk-greeting__tag">{item}</div>
                ))}
            </div>
            <div className="tk-greeting__tag tk-greeting__tag--red">Web3 Skills</div>
            <div className="tk-greeting__tag-container mb-3">
                {web3str.map((item, index) => (
                    <div key={index} className="tk-greeting__tag">{item}</div>
                ))}
            </div>
            <div className="tk-greeting__tag tk-greeting__tag--red">Design Skills</div>
            <div className="tk-greeting__tag-container mb-3">
                {designstr.map((item, index) => (
                    <div key={index} className="tk-greeting__tag">{item}</div>
                ))}
            </div>
            <div className="tk-greeting__tag tk-greeting__tag--red">Soft Skills</div>
            <div className="tk-greeting__tag-container mb-3">
                {softstr.map((item, index) => (
                    <div key={index} className="tk-greeting__tag">{item}</div>
                ))}
            </div>
        </section>
    );
}

export default Greeting;