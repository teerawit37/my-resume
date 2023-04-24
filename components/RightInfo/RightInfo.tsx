import logo from '../../public/images/logo.png';
import { CurrentSection, ExpSection, GreetingSection, TechStackSection } from '../Section';

export interface IExpData {
    position: string;
    company: string;
    period: string;
    address: string;
    link: string;
}

export interface IStrengthsData {
    title: string;
    skills: string[];
}

export interface IRightInfoProps {
    name: string;
    position: string;
    updated: string;
    current: string;
    location: string;
    greetings: string;
    strengths: IStrengthsData[];
    exp: IExpData[];
}

const RightInfo: React.FC<IRightInfoProps> = ({
    name,
    position,
    updated,
    current,
    location,
    greetings,
    strengths,
    exp,
}) => {
    return (
        <section className="tk-right-info">
            <GreetingSection greetings={greetings} />
            <CurrentSection
                position={position}
                current={current}
                location={location}
                img={logo}
            />
            <ExpSection data={exp} />
            <TechStackSection data={strengths} />
        </section>
    );
};

export default RightInfo;
