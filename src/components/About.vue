<template>
  <div id="about">
      <div class="container">
          <h3 data-aos="fade-up" data-aos-delay="600">About the platorm</h3>

          <div class="row">
              <div class="col-md-6" data-aos="fade-right" data-aos-delay="200">
                  <img src="@/assets/img/features-01.png" class="features" alt="..." />
              </div>
              <div class="col-md-6 text" data-aos="fade-left" data-aos-delay="300">
                  <div class="title-start">
                    <h2>CREATE AND INVEST</h2>
                    <h1 class="title-big">Create your own NFT</h1>
                    <p>Multiple Chains, One Home. Stack up all your NFTs from across blockchains.</p>
                  </div>
                  <div class="title-end">
                      <div class="col">
                        <h1>6,900+</h1>
                        <p>
                            Collections Indexed every 5mins.
                        </p>
                      </div>
                      <div class="col">
                         <h1>25x</h1>
                         <p>
                             Difference in Floor & Estimated NFT Value
                         </p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="row row-bottom">
              <div class="col-md-6 text" data-aos="fade-right" data-aos-delay="300">
                  <div class="title-start">
                    <h2>SYNC AND TRACK</h2>
                    <h1 class="title-big">Multiple Chains, One Home</h1>
                    <p>We make it easy to Discover, Invest and manage all your NFTs at one place, looked up one of the more obscure.Find the right NFT collections to buy within the platform.</p>
                  </div>
                  <div class="title-end">
                      <div class="col">
                        <h1>6,900+</h1>
                        <p>
                            Collections Indexed every 5mins.
                        </p>
                      </div>
                      <div class="col">
                         <h1>25x</h1>
                         <p>
                             Difference in Floor & Estimated NFT Value
                         </p>
                      </div>
                  </div>
                </div>
              <div class="col-md-6 text" data-aos="fade-left" data-aos-delay="200" >
                  <img src="@/assets/img/features-04.png" class="features" alt="..." />
                </div>
          </div>

      </div>  
      <br>
    <img src="https://themegenix.net/nerko/wp-content/uploads/2022/12/divider-01.svg" class="border" alt='..' data-aos="zoom-in" data-aos-delay="700" />

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    #about{
        overflow: hidden;
    }

    img{
        max-width: 100%;
    }

    h1{
        display: block;
        font-size: 5vh;
        font-weight: bold;
        color: var(--color--white);
        font-family: var(--power);
    }

    .title-big{
        font-size: 8vh;
        max-width: 500px;
    }

    h2{
        display: block;
        font-size: 24px;
        font-family: var(--roboto);
        background: -webkit-linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        display: block;
        font-size: 18px;
        color: var(--tg-body-color);
    }
    .title-start{
        text-align: left;
        margin-bottom: 50px;
    }
    .title-end{
        display: flex;
        text-align: left;
        
    }

    .row-bottom{
        margin-top: 70px;
    }

    @media (max-width: 992px) { 

    .title-start{
        text-align: center;
    }
    .title-end{
        display: block;
        text-align: center;
        
    }
    }
</style>