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
      
      <Component {...pageProps} />
    </div>

  )
}


export default NFTmarketplace
