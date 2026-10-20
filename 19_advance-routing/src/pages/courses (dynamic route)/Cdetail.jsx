import { useParams } from "react-router-dom"

const Cdetail = () => {
  const params = useParams()
  console.log(params.id);

  return (
    <div>
      <h2 className='text-3xl text-center font-semibold mt-10'>
        <span className="capitalize">{params.id} </span>
        = Course Detail page
      </h2>
    </div>
  )
}

export default Cdetail