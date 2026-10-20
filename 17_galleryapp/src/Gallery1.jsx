import axios from "axios";
import { useState } from "react";

const Gallery1 = () => {

  const [userData, setUData] = useState([])

  const getData = async () => {
    console.log('Data');

    const responce = await axios.get('https://picsum.photos/v2/list?page=3&limit=20')

    setUData(responce.data)

  }

  let printUserData = 'No User available'

  if (userData.length > 0) {
    printUserData = userData.map((porp, index) => {
      return <div key={index}>
        <img src={porp.download_url} alt="Img" className="h-40" />
      </div>
    })
  }
  return (
    <div>
      <h1 className="text-4xl">Gallery</h1>
      <button
        onClick={getData}
        className="bg-red-500 p-4 rounded-xl mt-10 active:scale-95">Get data</button>

      <div className="flex flex-wrap gap-4">
        {printUserData}
      </div>
    </div>
  )
}

export default Gallery1