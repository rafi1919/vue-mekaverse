<template>
    <div id="collection">
        <div class="container">
            <div class="row " align-v="center">
                <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
                    <div class="card">
                        <div class="frame">
                        <img src="@/assets/img/meka-1.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">#Meka001</h5>
                            <p class="card-text">meka epic robot bla bla bla</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <div class="card">
                        <div class="frame">
                        <img src="@/assets/img/meka-1.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">#Meka001</h5>
                            <p class="card-text">meka epic robot bla bla bla</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
                    <div class="card" >
                        <div class="frame">
                        <img src="@/assets/img/meka-1.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">#Meka001</h5>
                            <p class="card-text">meka epic robot bla bla bla</p>
                        </div>
                    </div>
                </div>

                   <div class="col-md-3" data-aos="fade-up" data-aos-delay="400">
                    <div class="card">
                        <div class="frame">
                        <img src="@/assets/img/meka-1.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">#Meka001</h5>
                            <p class="card-text">meka epic robot bla bla bla</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <a class="btn" data-aos="fade-down" data-aps-delay="1100">View More in Opensea</a>
        <br>
        <!-- <img src="@/assets/img/gradient-circle.png" class="border" alt='..' /> -->
        <img src="https://themegenix.net/nerko/wp-content/uploads/2022/12/divider-01.svg" class="border" alt='..' data-aos="zoom-in" data-aos-delay="700" />
    </div>

</template>

<script>
export default {
    name:'collection'
}
</script>

<style scoped>


#collection{

    padding-top:100px ;
}

.frame{
    padding: 10px ;
}
img{
    border-radius: 20px;

}
.card{
    background: var(--tg-rgba-1);
    border-radius: 30px;
    margin-bottom: 50px;
}

.card h5{
    font-family: var(--power);
    font-weight: bolder;
    font-size: 20px;
    color: var(--color--white);
}

.card p{
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

</style>