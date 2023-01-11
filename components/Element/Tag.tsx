interface Props {
    children: React.ReactNode;
    red?: boolean;
}

const Arrow: React.FC<Props> = ({ children, red=false }) => {
    return (
        <div className={`tk-tag ${red && 'tk-tag--red'}`}>{children}</div>
    );
};

export default Arrow;