import './imgcard.css'


const ImgCard = ({ing,name}) => {
  return (
    <div>
      <img src={ing} alt="" />
        <p className='my-[10px]'>{name}</p>
    </div>
  )
}

export default ImgCard