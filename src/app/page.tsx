import Image from "next/image";
import Header from "./header"
import Hero from "./Hero"
import Combos from "./Combos"
import Cardapio from "./Cardapio"
import Footer from "./Footer"

export default function Home() {
  return (
    <div>
   < Header/>
   < Hero/> 
   < Combos/>
   <Cardapio/>
   <Footer/>
   </div>
  );
}
