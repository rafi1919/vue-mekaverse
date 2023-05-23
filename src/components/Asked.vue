<template>
  <div id="asked">
      <div class="container">
          <h3 data-aos="fade-up" data-aos-delay="300">Asked Question</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample" data-aos="fade-up" data-aos-delay="500">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Mekaverse collection ?
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How we can buy and invest NFT ?
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Why we should buy NFT ?
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
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

    .accordion{
        max-width: 700px;
        border-radius: 20px;
        margin: auto;
    }

    .accordion-item{
    
    background: var(--tg-rgba-1);

    }
    .accordion-button{
        background: var(--tg-rgba-1);

    }

    .accordion button{
        color: var(--color--white);
        font-family: var(--power);
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .accordion .accordion-body{
        color: var(--color--white);
    }

    .container{
        padding: 100px 0;
    }


</style>