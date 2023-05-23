<template>
  <div id="header">
      <div class="filter">
          <img class="bg" src="@/assets/img/meka-header.jpg" alt="...">
      <div class="container justify-content-center">
          <div class="title" data-aos="fade-up" data-aos-delay="700">
          <h1>Buy & Sell</h1>
          <h1>Mekaverse</h1>
          <h1>Collection</h1>
          <p>Invest and manage all your NFTs at one place.</p>
          <a class="btn">Browse collection</a>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#header{
    height: 90vh;
}

.bg {
  opacity: 0.2;
  position: absolute;
  left: 0;
  top: 0;
  height: 90vh;
    background-size: cover;
    background-repeat: no-repeat
}

.filter{
    overflow: hidden;
    position: relative;
    background: var(--bs-theme);
    height: 90vh;
}

img{
     mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%);
}
.container{
    padding-top: 100px ;
}

.title{
    padding-top: 50px ;
    position: relative;
}

h1{
    font-family: var(--roboto);
    font-size: 5.9vw;
    font-weight: var(--font-black);
    color: var(--color--white);
}

p{
    font-family: var(--roboto);
    font-size: 16px;
    font-weight: 500;
    color: var(--color--white);
}

.btn{
    margin-top: 30px;
    padding: 20px 40px;
    background: var(--gradient--vivid-cyan-blue-to-vivid-purple);
    border-radius: 40px;
    font-size: 13px;
    color: var(--color--white);
    cursor: pointer;
}

@media (max-width: 992px) { 

h1{
    font-family: var(--roboto);
    font-size: 13vw;
    font-weight: var(--font-black);
    color: var(--color--white);
    }
}

</style>