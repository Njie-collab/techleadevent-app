import { useState} from 'react'

const Cart = () => {
    const [localCart, setlocalCart]= useState(localStorage.getItem("cart"))

    
  return (
    <div>
        {localCart ? localCart.split(",").map((item)=>(
            <div>
                hello
                {
                    localCart ? <div>
                        <p>You got something in cart</p>
                    </div> : 
                   
                    console.log(item)
                    
                }

            </div>
        ))
        :
        <h3>
cart is empty
    </h3>
    }
    </div>
  )
}

export default Cart