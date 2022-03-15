import '../styles/globals.css'
import './app.css'
import Link from 'next/link'


function NFTmarketplace({Component, pageProps}) {
  return (
    <div>
      <nav className='border-b p-6' style={{backgroundColor:'#00539CFF'}}>
        <p className='text-4x1 font-bold text-orange-300 text-center pt-3'>NFT-Marketplace </p>
        
        <div className='flex mt-4 justify-center'>
          <Link href='/'>
            <a className='mr-4 text-orange-200 no-underline font-semibold'>
              Home 
            </a>
          </Link>
          <Link href='/Marketplace'>
            <a className='mr-6 text-orange-200 no-underline font-semibold '>
              Marketplace
            </a>
          </Link>
          <Link href='/my-nfts'>
            <a className='mr-6 text-orange-200 no-underline font-semibold '>
              My NFTs
            </a>
          </Link>
          <Link href='/creator-dashboard'>
            <a className='mr-6 text-orange-200 no-underline font-semibold'>
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav> 

      <head>  
      <title>Project-17</title>
      </head>

      <body>
      <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
             src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
</div>
      </body>
      
      <Component {...pageProps} />
    </div>

  )
}


export default NFTmarketplace
