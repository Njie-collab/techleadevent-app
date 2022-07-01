import { useState} from 'react'
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = ({eventinfo,cart}) => {
    // const [localCart, setlocalCart]= useState(localStorage.getItem("cart"))



    
  return (
    <div>
      <Button variant="contained" color="secondary" eventinfo={eventinfo}>
        <ShoppingCartIcon />+ 
      </Button>

      {/* {localCart ? localCart.split(",").map((item)=>(
            <div>
                hello
                {
                    localCart ? <div>
                        <button >{localCart.length}You got something in cart</button>
                    </div> : 
                   
                    console.log(item)
                    
                }

            </div>
        ))
        :
        <h3>
cart is empty
    </h3>
    } */}
    </div>
  );
}

export default Cart