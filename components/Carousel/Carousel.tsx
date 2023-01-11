import { Card } from '../Card';
import { JobsType } from '../RightInfo';

type MyComponentProps = {
    data: JobsType[]
};

const Carousel: React.FC<MyComponentProps> = ({
    data
}) => {
    return (
        <div className="tk-carousel">
            <div className="tk-carousel__viewport">
                {data.map((item: JobsType, key: number) => (
                    <div key={key} className='tk-carousel__slide'>
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
    );
};

export default Carousel;
