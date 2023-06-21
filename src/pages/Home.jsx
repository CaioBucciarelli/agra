import "../css/style.css"

import Header from "../interpolacao/global/header";
import Intro from "../interpolacao/home/intro";
import MockupsApresentacao from "../interpolacao/home/apresentacao-mockups";
import PorqueNos from "../interpolacao/home/porque-nos";
import PlanosOpcao from "../interpolacao/global/planos-opcao";

function Home(){

    return(
        <div>
            <Header/>
            <Intro/>
            <MockupsApresentacao/>
            <PorqueNos/>
            <PlanosOpcao/>
        </div>
    )

}

export default Home;