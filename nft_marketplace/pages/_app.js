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
      <Component {...pageProps} />
    </div>
  )
}

export default NFTmarketplace
