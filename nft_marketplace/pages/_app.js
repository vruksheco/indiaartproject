import '../styles/globals.css'
import './app.css'
import Link from 'next/link'

function NFTmarketplace({Component, pageProps}) {
  return (
    <div>
      <nav className='border-b p-6' style={{backgroundColor:'#BF40BF'}}>
        <p className='text-4x1 font-bold test-white'>NFT-Marketplace </p>
        <div className='flex mt-4 justify-center'>
          <Link href='/'>
            <a classname='mr-4'>
              Main Marketplace 
            </a>
          </Link>
          <Link href='/mint-item'>
            <a classname='mr-6'>
              Mint tokens
            </a>
          </Link>
          <Link href='/my-nfts'>
            <a classname='mr-6'>
              My NFTs
            </a>
          </Link>
          <Link href='/account-dashboard'>
            <a classname='mr-6'>
              Account Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <div> 
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4cJjQJvomcFeQY-vuLH6kEOOq3sKTHoJaw&usqp=CAU" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRAC1K2rrXvZdsKuEypA8FYrm-CCFEf_57Q&usqp=CAU" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIRQJ1TTjEVdVgOl53ppaLOsuNzHFt3k62w&usqp=CAU" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}


export default NFTmarketplace
