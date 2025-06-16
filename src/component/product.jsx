import './imgcard.css'
import img0 from '#/inn.png'

const Products = ({img,name,sum}) => {
  return (
    <div>
        <img src={img} alt="" width={"250px"}/>
        <p className='my-[10px]'>{name}</p>
        <img src={img0} alt="" width={'60px'} />
        <p className='font-bold my-[10px]'>{sum}</p>
    </div>
  )
}

export default Products