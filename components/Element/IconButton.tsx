interface Props {
    icon: string,
    onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ icon, onClick }) => {
    return (
        <button className="tk-icon-button" onClick={onClick}>
            <i className={icon} />
        </button>
    );
};

export default IconButton;