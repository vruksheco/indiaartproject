import '../styles/globals.css'
import './app.css'
import Link from 'next/link'


function NFTmarketplace({Component, pageProps}) {
  return (
    <div>
      {/* <nav className='border-b p-6' style={{backgroundColor:'white'}}>
        <div className='border-b' style={{backgroundColor: 'purple'}}>
        <p className='text-4x1 font-bold test-white'>NFT-Marketplace </p>
        </div>
        <div className='flex mt-4 justify-center'>
          <Link href='/'>
            <a className='mr-4'>
              Main Marketplace 
            </a>
          </Link>
          <Link href='/mint-item'>
            <a className='mr-6'>
              Mint tokens
            </a>
          </Link>
          <Link href='/my-nfts'>
            <a className='mr-6'>
              My NFTs
            </a>
          </Link>
          <Link href='/account-dashboard'>
            <a className='mr-6'>
              Account Dashboard
            </a>
          </Link>
        </div>
      </nav> */}

      <head>  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <title>Project-17</title>
      </head>
      <body>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active" >
                <div class="container">
                  <h1>The Headline for Homepage</h1>
                  <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, 
                    all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.</p>
                  <a href="#" class="btn btn-lg btn-primary">
                    Sign Up Today
                  </a>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                      <h1>The Headline for Homepage</h1>
                      <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, 
                        all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.</p>
                      <a href="#" class="btn btn-lg btn-primary">
                        Sign Up Today
                      </a>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                      <h1>The Headline for Homepage</h1>
                      <p>BootstraP employs a handful of important global styles and settings that you’ll need to be aware of when using it, 
                        all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.</p>
                      <a href="#" class="btn btn-lg btn-primary">
                        Sign Up Today
                      </a>
                </div>
              </div>
          </div>
          <a href="#myCarousel" class="carousel-control-prev" role="button"
          data-slide="prev">
            <span class="sr-only">Previous</span>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a href="#myCarousel" class="carousel-control-next" role="button"
          data-slide="next">
            <span class="sr-only">Next</span>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      </body>
      
      <Component {...pageProps} />
    </div>

  )
}


export default NFTmarketplace
