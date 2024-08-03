import React from 'react';
import './index.css';
import Carousel from './components/carousel.js';

const Header = () => (
  <header>
    <h1>MARANHÃO</h1>
  </header>
);

const Nav = () => (
  <nav>
    <a href="#culinaria">Culinaria</a>
    <a href="#festas">Festas</a>
    <a href="#artesanato">Artesanato</a>
    <a href="#turismo">Turismo</a>
  </nav>
);

const NewsArticle = ({ id, title, children }) => (
  <section className="news-article" id={id}>
    <h2>{title}</h2>
    {children}
  </section>
);

const CulinariaInfo = () => (
  <div className="culinaria-info">
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium deserunt, libero rerum dolores provident voluptas quibusdam officiis, itaque quaerat, alias laborum consectetur quae a unde voluptatum perferendis minus. Laboriosam.</p>
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
  </div>
);

const ArtesanatoInfo = () => (
  <div className="artesanato-info">
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium deserunt, libero rerum dolores provident voluptas quibusdam officiis, itaque quaerat, alias laborum consectetur quae a unde voluptatum perferendis minus. Laboriosam.</p>
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
  </div>
);

const FestasInfo = () => (
  <div className="festas-info">
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium deserunt, libero rerum dolores provident voluptas quibusdam officiis, itaque quaerat, alias laborum consectetur quae a unde voluptatum perferendis minus. Laboriosam.</p>
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
  </div>
);

const TurismoInfo = () => (
  <div className="turismo-info">
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium deserunt, libero rerum dolores provident voluptas quibusdam officiis, itaque quaerat, alias laborum consectetur quae a unde voluptatum perferendis minus. Laboriosam.</p>
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
    <div className="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta quas id libero, quam tempore enim error porro repellat vitae alias eos accusantium consectetur beatae, vel blanditiis quisquam cum ex?</p>
    </div>
    <div className="box">
      <img src="./img/arte2.jpg" alt="" />
    </div>
  </div>
);

const App = () => (
  <div>
    <Header />
    <Nav />
    <div className="container">
      <NewsArticle id="maranhao">
        <div className="maranhao-bandeira">
          <img src="./img/Bandeira_do_Maranhão.svg.png" alt="" />
        </div>
        <div>
          <h1>SOBRE O MARANHÃO</h1>
          <p>
            O Maranhão é um estado brasileiro. O seu território foi objeto de disputa entre diversos povos europeus, sendo que os portugueses mantiveram o domínio da região. A cultura maranhense é resultado da influência das populações que ocuparam o estado ao longo da sua colonização. A sua capital, São Luís, possui um centro histórico muito conservado. A população maranhense está concentrada no litoral e nas cidades médias do interior do estado.
            <br />
            Maranhão é uma das 27 unidades federativas do Brasil, localizada na Região Nordeste englobando a sub-região Meio-Norte do País. O estado faz divisa com três estados brasileiros: Piauí (leste), Tocantins (sul e sudoeste) e Pará (oeste), além do Oceano Atlântico (norte). Com área de 331 937,450 km² e com 217 municípios, é o segundo maior estado da região Nordeste e o oitavo maior do Brasil.
          </p>
        </div>
      </NewsArticle>
      <NewsArticle id="culinaria" title="CULINARIA">
        <Carousel images={[
          "./img/casa-de-juja-1024x768.jpg",
          "./img/culinaria-maranhense.webp",
          "./img/Comida-tipica-Maranhao-peixe-escabeche-molho-de-camarao-leite-de-coco-1024x569.jpg.webp"
        ]} />
        <p>
          Resumo da notícia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quis nisl tempus scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque optio aperiam velit error, odit earum esse? Illum animi excepturi quasi facere rem suscipit laboriosam temporibus soluta. Dolores, asperiores ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil blanditiis tempore voluptatibus autem. Totam quasi voluptas vel. Laudantium, assumenda! Excepturi culpa asperiores sed aperiam aliquam voluptate suscipit velit quod.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit facilis aliquam alias, blanditiis eveniet, accusamus saepe reiciendis quod, veritatis qui! Dolores dignissimos iste explicabo quia vero quasi atque consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, in voluptates, fugiat qui harum quibusdam animi quis deserunt iure quisquam natus ipsum assumenda vero quaerat ad pariatur esse quam vitae.
        </p>
        <CulinariaInfo />
      </NewsArticle>
      <NewsArticle id="festas" title="FESTAS">
        <Carousel images={[
          "./img/tambor-de-crioula-1-1024x683.jpg",
          "./img/sao_joao_4.jpg",
          "./img/sao-joao-no-maranhao-a-festa-junina-do-bumba-meu-boi-bumba-meu-boi-conexao123campina-grande-conexao123.jpg"
        ]} />
        <p>
          Resumo da notícia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quis nisl tempus scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque optio aperiam velit error, odit earum esse? Illum animi excepturi quasi facere rem suscipit laboriosam temporibus soluta. Dolores, asperiores ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil blanditiis tempore voluptatibus autem. Totam quasi voluptas vel. Laudantium, assumenda! Excepturi culpa asperiores sed aperiam aliquam voluptate suscipit velit quod.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit facilis aliquam alias, blanditiis eveniet, accusamus saepe reiciendis quod, veritatis qui! Dolores dignissimos iste explicabo quia vero quasi atque consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, in voluptates, fugiat qui harum quibusdam animi quis deserunt iure quisquam natus ipsum assumenda vero quaerat ad pariatur esse quam vitae.
        </p>
        <FestasInfo />
      </NewsArticle>
      <NewsArticle id="artesanato" title="ARTESANATO">
        <Carousel images={[
          "./img/arte2.jpg",
          "./img/Artesanato-Sao-Luis-Foto-Mauricio-Alexandre.jpg",
          "./img/WhatsApp_Image_2022-06-15_at_12.18.57.jpeg"
        ]} />
        <p>
          Resumo da notícia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quis nisl tempus scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque optio aperiam velit error, odit earum esse? Illum animi excepturi quasi facere rem suscipit laboriosam temporibus soluta. Dolores, asperiores ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil blanditiis tempore voluptatibus autem. Totam quasi voluptas vel. Laudantium, assumenda! Excepturi culpa asperiores sed aperiam aliquam voluptate suscipit velit quod.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit facilis aliquam alias, blanditiis eveniet, accusamus saepe reiciendis quod, veritatis qui! Dolores dignissimos iste explicabo quia vero quasi atque consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, in voluptates, fugiat qui harum quibusdam animi quis deserunt iure quisquam natus ipsum assumenda vero quaerat ad pariatur esse quam vitae.
        </p>
        <ArtesanatoInfo />
      </NewsArticle>
      <NewsArticle id="turismo" title="TURISMO">
        <Carousel images={[
          "./img/Lençóis_Maranhenses_2018-e1629409312218.webp",
          "./img/alcantara.jpg",
          "./img/parnaiba.webp"
        ]} />
        <p>
          Resumo da notícia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quis nisl tempus scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque optio aperiam velit error, odit earum esse? Illum animi excepturi quasi facere rem suscipit laboriosam temporibus soluta. Dolores, asperiores ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil blanditiis tempore voluptatibus autem. Totam quasi voluptas vel. Laudantium, assumenda! Excepturi culpa asperiores sed aperiam aliquam voluptate suscipit velit quod.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit facilis aliquam alias, blanditiis eveniet, accusamus saepe reiciendis quod, veritatis qui! Dolores dignissimos iste explicabo quia vero quasi atque consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, in voluptates, fugiat qui harum quibusdam animi quis deserunt iure quisquam natus ipsum assumenda vero quaerat ad pariatur esse quam vitae.
        </p>
        <TurismoInfo />
      </NewsArticle>
    </div>
    <footer>
      <p>&copy; 2024 Blog de Notícias</p>
    </footer>
    <script scr="./src/components/carrosel.js" async/>
  </div>
);

export default App;
