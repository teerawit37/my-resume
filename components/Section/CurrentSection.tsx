import React from 'react';
import Image from 'next/image';
import { Arrow } from '../Element';

interface ICurrentProps {
    img: StaticImageData;
    position: string;
    current: string;
    location: string;
}

const CurrentSection: React.FC<ICurrentProps> = ({ img, position, current, location }) => {
    return (
        <div className="tk-current-section mb-2">
            <div className="title-main">
                <Arrow></Arrow>
                <span>CURRENT</span>
            </div>
            <div className="tk-current-section__work-title">{position} · Full-time</div>
            <div className='row mb-3'>
                <div className="col-6">
                    <div className="d-flex align-items-center">
                        <div className="tk-current-section__image-circle">
                            <Image
                                alt="banner"
                                src={img}
                                placeholder="blur"
                                quality={100}
                            />
                        </div>
                        <div>
                            <div className="tk-current-section__head-job">COMPANY</div>
                            <div className="tk-current-section__sub-job">{current}</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-2">
                    <div className="tk-current-section__head-job">LOCATION</div>
                    <div className="tk-current-section__sub-job">{location}</div>
                </div>
            </div>
        </div>
    );
}

export default CurrentSection;
