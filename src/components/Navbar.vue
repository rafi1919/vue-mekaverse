<template>
<nav class="navbar navbar-expand-lg fixed-top navbar-dark pattern"  :class="{ 'onScroll': !view.topOfPage}">
  <div class="container">
    <a class="navbar-brand" href="#">Mekaverse</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Collection</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link">Choose</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link">About</a>
        </li>
        <!-- <li class="nav-item" >
          <a class="nav-link">Roadmap</a>
        </li> -->
        <li class="nav-item" >
          <a class="nav-link">FAQ</a>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
 
</template>

<script>

export default {
    name:"Navbar",
     data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },


}
</script>

<style scoped>

nav {
  padding: 30px;
  background: transparent;
   transition: all .2s ease-in-out;
    &.onScroll {
      box-shadow: 0 0 10px #aaa;
      background-color: var(--bs-theme-trans);
      ul li {
        color: #10b761;
      }
    }
  
}

nav a {
    color: var(--color--white);
    font-family:"roboto";
    font-size: 12rem;
    font-weight: var(--font-black);
    font-size: 18px;
    padding: 20px;
    cursor: pointer;

}

nav a:hover {
    color: var(--bs-gray-500);
    transition: 0.4s;
}

.nav-item {
  margin: 0 20px;
}

@media (max-width: 992px) { 

.navbar-collapse {
    /* background-color: var(--bs-theme); */
    transition: all .5s;
}

.nav-item{
  border-bottom: 1px solid var(--color--white);
}
}
</style>