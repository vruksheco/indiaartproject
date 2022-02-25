import '../styles/globals.css'
import Link from 'next/link'

function NFTmarketplace({Component, pageProps}){
  return (
    <div>
      <nav className='border-b p-6' style={{backgroundColor:'brown'}}>
        <p className='text-4x1 font-bold test-white'>NFT-Marketplace</p>
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
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default NFTmarketplace
