import { Bookmark } from 'lucide-react';

const CardDemo = () => {
    return (
        <div className='card'>
            <div className='top'>
                <img src="https://northeastreads.com/wp-content/uploads/2023/08/amazon-600.png" alt="Amazon" />
                <button>Save <Bookmark size={18} /></button>
            </div>

            <div className="center">
                <h3>Amazon  <span>5 days ago</span></h3>
                <h2>Senior UI Designer</h2>
                <div>
                    <h4>Part time</h4>
                    <h4>Senir Level</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <div>
                        <h3>$120/h</h3>
                        <p>Mumbai, India</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default CardDemo