import check from '../asset/check.svg'
const PopUp = ({item}) => {
  return (
    <div className='w-[200px] rounded-md h-[50px] bg-gray-700 text-white  fixed top-[50px] right-[-200px] animate-slide flex items-center justify-center gap-2'><img className='w-[25px]' src={check}/><span>{`${item} added`}</span></div>
  )
}

export default PopUp