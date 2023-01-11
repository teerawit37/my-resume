import { Arrow, Tag } from '../Element';

interface IStrengsData {
    title: string;
    skills: string[];
}

type MyComponentProps = {
    data: IStrengsData[];
};

const TechStackSection: React.FC<MyComponentProps> = ({
    data
}) => {
    return (
        <div className="tk-stack-section">
            <div className="title-main">
                <Arrow></Arrow>
                <span>SKILL</span>
            </div>
            {data.map((item: IStrengsData, index) => (
                <div key={index}>
                    <Tag red>{item.title}</Tag>
                    <div className="tk-stack-section__tag-container mb-3">
                        {item.skills.map((skill) => (
                            <Tag key={skill}>{skill}</Tag>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechStackSection;
