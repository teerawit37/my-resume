import { Carousel } from '../Carousel';
import { Arrow } from '../Element';
import { IExpData } from '../RightInfo';

type MyComponentProps = {
    data: IExpData[]
};

const ExpSection: React.FC<MyComponentProps> = ({
    data
}) => {
    return (
        <div className="tk-exp-section">
            <div className="title-main">
                    <Arrow></Arrow>
                    <span>EXP</span>
                </div>
                <Carousel data={data}></Carousel>
        </div>
    );
};

export default ExpSection;
