<template>
  <div id="choose">
    <div class="container">
        <h3 data-aos="fade-up" data-aos-delay="400">Why choose us ?</h3>
    <div class="row ">
        <div class=" col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div class="card">
                <h1 class="card-title">01.</h1>
                <h2 class="card-subtitle">Huge</h2>
                <h2 class="card-subtitle">Collection</h2>
                <p class="card-text">
                    A collection of 5,000 unique Nerkos built to go beyond the digital space that will unlock numerous benefits for our community.
                </p>
            </div>
        </div>
        <div class="col-md-3 mt-5" data-aos="fade-up" data-aos-delay="200">
             <div class="card">
                <h1 class="card-title">02.</h1>
                <h2 class="card-subtitle">High</h2>
                <h2 class="card-subtitle">Quality</h2>
                <p class="card-text">
                    The nerko’s collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care.
                </p>
            </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="400">
             <div class="card">
                <h1 class="card-title">03.</h1>
                <h2 class="card-subtitle">Top</h2>
                <h2 class="card-subtitle">Resource</h2>
                <p class="card-text">
                    Tasty design resources made with care for each pixel. Tokens, metaverse and game resources NFTs. Access additional drops.
                </p>
            </div>
        </div>
        <div class="col-md-3 mt-5" data-aos="fade-up" data-aos-delay="400">
             <div class="card">
                <h1 class="card-title">04.</h1>
                <h2 class="card-subtitle">Big</h2>
                <h2 class="card-subtitle">Community</h2>
                <p class="card-text">
                    Be part of a community of nerko owners and create user generated items. Rent, advertise, lounch stores, create items. We make it easy to discover.
                </p>
            </div>
        </div>
        </div>
    </div>

     <br>
        <!-- <img src="@/assets/img/gradient-circle.png" class="border" alt='..' /> -->
        <img src="https://themegenix.net/nerko/wp-content/uploads/2022/12/divider-01.svg" class="border" alt='..' data-aos="zoom-in" data-aos-delay="700" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 
    #choose{
        background: var(--bs-theme);
    } */

    .col-md-3{
        text-align: left;
        border-radius: 30px;
    }

    .card{
        padding: 20px;
        border-radius: 30px;
    }
    h1{
        display: block;
        font-size: 72px;
        font-weight: 900;
        font-family: var(--roboto);
        background: -webkit-linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
        -webkit-background-clip: text;
        padding-top: 50px;
        -webkit-text-fill-color: transparent;
    }

    h2{
        display: block;
        font-weight: bold;
        color: var(--color--white);
        font-family: var(--power);

    }

    p{
        display: block;
        font-size: 18px;
        color: var(--tg-body-color);
    }
    .card{
        height: 400px;
        background: var(--tg-rgba-1);
    }

    @media (max-width: 992px) { 

    .col-md-3{
        margin-top: 30px;
        }
    }
</style>