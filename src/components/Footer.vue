<template>
  <div id="footer">
      <div class="container">
          <h3>We make it easy to Discover</h3>
          <p>Invest and manage all your NFTs at one place.</p>
          <a class="btn" href="">Join community</a>
      </div>
      <div class="image-footer">
        <div class="col">
            <img src="@/assets/img/boxes.png"  >
        </div>
        <div class="copyright">
            <p>© 2023 Vue Mekaverse. All rights reserved.</p>
        </div>
        <div class="col">
            <img src="@/assets/img/wallet.png"  >
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    h3{
        width: 600px;
        margin: auto;
        padding: 0;
    }
    p{
        font-size: 24px;
        color: var(--bs-gray);

    }

    .btn{
        margin-top: 30px;
        padding: 20px 40px;
        background: var(--gradient--vivid-cyan-blue-to-vivid-purple);
        border-radius: 40px;
        font-size: 20px;
        font-weight: 500;
        color: var(--color--white);
        cursor: pointer;
    }

    .image-footer{
        display: flex;
    }
    .image-footer p{
        padding-top:200px ;
        bottom: 1;
    
    }

    img{
        width: 500px;
        bottom: 1;
    }

    @media (max-width: 992px) { 

    img{
        display: none;
    }

    h3{
        width: 200px;
    }

    }
</style>