import "../../css/style.css";

import imgNoticia from "../../assets/imagens/intro-bg.jpg"

function Noticias(){

    return(
      <section aria-label="Notícias" className="noticias container">
        <h2 className="font-1-xxl">notícias<span className="cor-p3">.</span></h2>
        <div className="noticias-items">
          <div className="noticias-item">
            <img src={imgNoticia} alt=""/>
            <div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Purus adipiscing tincidunt tincidunt justo ultricies. Adipiscing tincidunt biscas.Lorem ipsum dolor sit amet consectetur.</p>
              <a href="">Ver Notícias</a>
            </div>
          </div>
          <div className="noticias-item">
            <img src={imgNoticia} alt=""/>
            <div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Purus adipiscing tincidunt tincidunt justo ultricies. Adipiscing tincidunt biscas.Lorem ipsum dolor sit amet consectetur.</p>
              <a href="">Ver Notícias</a>
            </div>
          </div>
        </div>
      </section>
    )

}

export default Noticias;