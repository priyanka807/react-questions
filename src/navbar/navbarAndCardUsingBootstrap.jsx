import logo from './logo.svg';
import './App.css';
import {useState } from 'react'
function NavbarAndCardUsingBootstrap() {
  const [active,setActive] = useState(false)
  const [activeIndex,setActiveIndex] = useState(0)
  return (
    <>
    <nav class="navbar navbar-expand-md bg-dark border-bottom border-body"   data-bs-theme="dark">
    <div class="container-fluid  md-px-5">
      <div class="navbar-brand " href="#">Navbar scroll</div>
      <button class="navbar-toggler shadow-none  " id="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll px-3" >
          <li class="nav-item">
            <div class={`nav-link  ${activeIndex===0?"active":""}`}  onClick={()=>setActiveIndex(0)} >Home</div>
          </li>
          <li class="nav-item">
            <div class={`nav-link  ${activeIndex===1?"active":""}`}  onClick={()=>setActiveIndex(1)} >Link</div>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </div>
            <ul class="dropdown-menu">
              <li><div class="dropdown-item" >Action</div></li>
              <li><div class="dropdown-item" >Another action</div></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><div class="dropdown-item" >Something else here</div></li>
            </ul>
          </li>
          <li class="nav-item">
            <div class="nav-link disabled" aria-disabled="true">Link</div>
          </li>
        </ul>
        <form class="d-flex gap-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

   <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <div class="carousal_item">
                <h1>item1 </h1>
            <h1>item1 </h1>
            <h1>item1 </h1>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="carousal_item">
                <h1>item2 </h1>
                <h1>item2 </h1>
                <h1>item2 </h1>
            </div>
            
          </div>
          <div class="carousel-item ">
            <div class="carousal_item">
                <h1>item3 </h1>
            <h1>item3 </h1>
            <h1>item3 </h1>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="carousal_item">
                <h1>item3 </h1>
            <h1>item3 </h1>
            <h1>item3 </h1>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
       
 <div class=" container  bg-body-tertiary">
  <div class="row ">    
<div class="col-md-3">
    <div class="card" >
        <div class="parent">
            <img src="https://www.justairports.com/public/assets/frontend/imgs/page/homepage2/about_travel_1.webp" class="card-img-top" alt="..."/>

<div class="child">child</div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> 
</div>
<div class="col-md-3">
    <div class="card" >

        <div class="parent">
            <img src="https://www.justairports.com/public/assets/frontend/imgs/page/homepage2/about_travel_2.webp" class="card-img-top" alt="..."/>
    
<div class="child">
    child
</div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>
<div class="col-md-3">
    <div class="card" >
        <div class="parent">
            <img src="https://www.justairports.com/public/assets/frontend/imgs/page/homepage2/about_travel_3.webp" class="card-img-top" alt="..."/>

            <div class="child">child</div>
                    </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>
<div class="col-md-3">
    <div class="card" >
        <div class="parent">
            <img src="https://www.justairports.com/public/assets/frontend/imgs/page/homepage2/about_travel_3.webp" class="card-img-top" alt="..."/>

            <div class="child">child</div>
                    </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>
    </div>

</div> 
<div class="   bg-body-tertiary">
  <div class="d-flex ">    
<div class="items col-md-3">
 <div>

 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>


 </div>
</div>
<div class="items col-md-3">
  <div>
  <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
  </div>
</div>
<div class="items col-md-3">
   <div>
   <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
   </div>
</div>
<div class="items col-md-3">
    <div>
    <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
    </div>
</div>
    </div>

</div>
  </>
  );
}

export default NavbarAndCardUsingBootstrap;
