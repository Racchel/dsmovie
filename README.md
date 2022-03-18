<style>
   * {
   }

   header {
      background-color:rgba(77, 65, 192, 0.7); 
      vertical-align: middle; 
      padding: 10px 10px; 
      color: white; 
      font-weight: bold; 
      text-align: center; 
      border-bottom-left-radius: 40px; 
      border-top-right-radius: 40px; 
      margin-bottom: 50px;
   }

   section {
      line-height: 30px;
   }

   li {
      padding-bottom: 5px;
   }
   li span {
      font-weight: bold;
   }

   .info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
   }

   .info div {
      padding: 2px 20px;
   }

   .info div:first-child ul {
      list-style: none
   }

   .content-title {
      background-color:rgba(77, 65, 192, 0.2); 
      vertical-align: middle; 
      padding: 1px 15px;
      font-weight: bold; 
      margin: 50px 0;
   }

   .content-image {
      text-align: center; 
      border: 1px solid #ccc; 
      margin-bottom: 35px;
      padding: 5px;
   }

   footer {
      background-color:rgba(77, 65, 192, 0.9); text-align:center; vertical-align: 
      middle; padding: 20px 10px; 
      color: white; 
      font-weight: bold; 
      border-bottom-left-radius: 40px; border-top-right-radius: 40px;
   }

   footer span {
      font-size: 12px
   }

</style>


<header>
   <h1 style="color: white">🎬 DS MOVIE</h1>

   <p style="font-size: 12px">Projeto realizado na Semana Spring React (DevSuperior)</p>
</header>

<section class="info">
   <div>

   - 🔗 **Link**: [racchel-dsmovie.netlify.app](https://racchel-dsmovie.netlify.app)
   - ✅ **Status**: Concluído _(e aguardando melhorias)_
   - 📝 **Descrição**: Site para avaliação de filmes
   - 💜 **Curiosidade**: Meu primeiro projeto fullstack
   </div>

   <div>

   🚀 **Stacks:**
   * __Front-end__: ReactJS (Netlify)
   * __Back-end__: Spring (Heroku)
   * __Banco__: PostgreSQL
   </div>
</section>

<section class="content-title">

   ## Front-end
</section>

🟣 **Tela inicial:**

![Tela inicial](assets/initialScreen.jpeg)

<br>

🟠 **Tela de avaliação:**

![Tela de avaliação](assets/evaluationScreen.jpeg)

🔗 **Link:** [Design no Figma](https://www.figma.com/file/hpQuzpGHq2MmrI87xnfMoT/DSMovie1)

<section class="content-title">

## Backend: 
</section>

🔵 **Modelo de domínio:**

<div class="content-image">

![Modelo de domínio](assets/domain.png)
</div>

🟡 **Padrão de camadas:**

<div class="content-image">

![Modelo de domínio](assets/layerPattern.png)
</div>

🟢 **Lógica de avaliação dos filmes:**

<div class="content-image">

![Modelo de domínio](assets/evaluationLogic.png)
</div>


<footer>

   _Não deixe de entrar no site e avaliar seu filme preferido!_
   <span>By Racchel Velasco - março de 2022</span>
</footer>