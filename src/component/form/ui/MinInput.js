
import { MIN_QUANTITY,MIN_VALUE } from "../../../helpers/constants";

const MinInput = ({handleChange,formData}) => {


    let threshold;

    switch (formData.trigger) {
        case 'Minimum Purchase Value':
            threshold = <div className="w-1/2 flex flex-col gap-2">
                <label>
                    Minimum Amount
                </label><input onChange={handleChange} name={MIN_VALUE} className=" text-black py-2 px-5 rounded-md"
                    type='number'
                    placeholder="0.00"
                />
            </div>
            break;
        case 'Minimum Quantity Purchase':
            threshold = <div className="w-1/2 flex flex-col gap-2">
                <label>
                    Minimum Quantity
                </label><input onChange={handleChange}  name={MIN_QUANTITY} className=" text-black py-2 px-5 rounded-md"
                    type='number'
                    placeholder="0.00"
                />
            </div>
            break;

        default:
            break;
    }
    
  return (
    <>{threshold}</>
  )
}

export default MinInput