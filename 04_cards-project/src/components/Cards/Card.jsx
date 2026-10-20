import { Bookmark } from 'lucide-react';

const Card = () => {

    const cardinfo = [
        {
            logo: 'https://northeastreads.com/wp-content/uploads/2023/08/amazon-600.png',
            company: 'Amazon',
            days: '5 days ago',
            post: 'Senior UI/UX Designer',
            roles: ['Part-Time', 'Senior Level'],
            price: '$120/hr',
            location: 'Mumbai, India',
            saved: false
        },
        {
            logo: 'https://img.freepik.com/premium-vector/google-icon-isolated-white-background_1273375-828.jpg',
            company: 'Google',
            days: '30 days ago',
            post: 'Graphic Designer',
            roles: ['Part-Time', 'Flexible Schedule'],
            price: '$150–220k',
            location: 'Kochi, India',
            saved: true
        },
        {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1boukDZ1rbl6A9k9pg4Tp_aadnX6LrTOIKw&s',
            company: 'Dribbble',
            days: '18 days ago',
            post: 'Senior Motion Designer',
            roles: ['Contract', 'Remote'],
            price: '$85/hr',
            location: 'Chennai, India',
            saved: false
        },
        {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljqaDsIkzZQsQ01cpqsnbJ4TF75ZfXhVHQg&s',
            company: 'Figma',
            days: '5 days ago',
            post: 'UX Designer',
            roles: ['Full-Time', 'In office'],
            price: '$200–250k',
            location: 'Bangalore, India',
            saved: true
        },
        {
            logo: 'https://cdn.iconscout.com/icon/free/png-256/airbnb-226065.png',
            company: 'Airbnb',
            days: '5 days ago',
            post: 'Junior UI/UX Designer',
            roles: ['Contract', 'Remote'],
            price: '$100/hr',
            location: 'Delhi, India',
            saved: false
        },
        {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
            company: 'Apple',
            days: '5 days ago',
            post: 'Graphic Designer',
            roles: ['Full-Time', 'Flexible Schedule'],
            price: '$85–120k',
            location: 'Kerala, India',
            saved: true
        }
    ];
    return (<>
        {cardinfo.map((data, index) => (
            <div className='card' key={index}>
                <div className='top'>
                    <img src={data.logo} alt="logo" />
                    <button>Save <Bookmark size={18} /></button>
                </div>

                <div className="center">
                    <h3>{data.company} <span>{data.days}</span></h3>
                    <h2>{data.post}</h2>
                    <div>
                        {data.roles.map((role, index) => (
                            <h4 key={index}>{role}</h4>
                        ))}
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <div>
                            <h3>{data.price}</h3>
                            <p>{data.location}</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        ))}
    </>)
}

export default Card