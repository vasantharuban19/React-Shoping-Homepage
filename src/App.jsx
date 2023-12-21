import React,{useState} from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let [cart,setCart] = useState(0)
  let data = [
    {
      productname:"Fancy Product",
      star:true,
      productprice:"$40.00 - $80.00",

    },
    {
      productname:"Special Item",
      star:false,
      productprice:"$18",
      actualprice:"$20.00",
      sale:"Sale"

    },
    {
      productname:"Sale Item",
      star:true,
      productprice:"$25.00",
      actualprice:"$50.00",
      sale:"Sale"
    },
    {
      productname:"Popular Item",
      star:false,
      productprice:"$40.00",
      
    },
    {
      productname:"Sale Item",
      star:true,
      productprice:"$25.00",
      actualprice:"$50.00",
      sale:"Sale"
    },
    {
      productname:"Fancy Product",
      star:true,
      productprice:"$120.00 - $280.00"
    },
    {
      productname:"Special Item",
      star:false,
      productprice:"$18.00",
      actualprice:"$20.00",
      sale:"Sale"
    },
    {
      productname:"Popular Item",
      star:false,
      productprice:"$20.00"
    }
  ]
  return (
    <>
    <TopBar cart={cart} setCart={setCart}/>
    <Header/>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,i)=>{
                return  <Card data={e} cart={cart} setCart={setCart} key={i}/>
              })
            }
           
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;
