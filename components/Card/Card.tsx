import Link from 'next/link'

export type MyComponentProps = {
    title: string,
    subtitle: string;
    link: string;
    period: string;
    address: string;
}

const Card = ({
    title,
    subtitle,
    link,
    period,
    address
}: MyComponentProps) => {
    return (
        <div className="tk-card">
            <i className={`${link !== '' ? 'tk-icon-arrow-right' : 'tk-icon-angellist'} tk-card__nav-icon`} />
            <div className="tk-card__title">{title}</div>
            <div className="tk-card__sub">{`at ${subtitle}`}</div>
            <div className="tk-card__time">{period}</div>
            <div className="tk-card__address">{address}</div>
            <Link href={link}>
                <button></button>
            </Link>
        </div>
    );
}

export default Card;