import axios from "axios"
import { useState } from "react";

const Api2 = () => {

    const [data, setData] = useState([]);


    const getdata = async () => {
        const responce = await axios.get('https://picsum.photos/v2/list');
        console.log(responce.data);

        setData(responce.data);

    }
    return (
        <div>
            <h2>
                <button onClick={getdata}>Click here</button>
            </h2>

            <div>
                {data.map((prop, index) => {
                    return <div key={index}>
                        <h3>{index + 1} {prop.author}</h3>
                        <img src={prop.download_url} alt="image" style={{ width: '300px' }} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Api2