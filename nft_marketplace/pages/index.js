export default function Home() {
  return (
    <div className=" px-7 py-5">
      <div className="px-7 py-5 text-orange-200 bg-sky-700">
        <p className="text-4xl">What are NFTs</p>
        <p className="text-xl py-4">
        NFTs or Non-Fungible Tokens are digital tokens that represent ownership of any unique asset like art, collectibles, music, popular moments of history, even real estate. At a time, an NFT can have only one official owner in the world as it is stored and secured using Blockchain technology, which means no one can modify the ownership of an NFT which exists. The ownership can be sold to another person and only then it will be reflected on Blockchain.
        "Non-Fungible" means something which is unique, which is only one of its kind and which is not interchangeable. For example, a limited- edition Football player collectible card which is only one in the entire world and which can’t be exchanged for another one because similar card doesn’t exist.
        Whereas, "Fungible" means something which can be exchanged for another similar entity, something which isn’t unique. Like a 10 rupees note can be exchanged for another 10 rupees note or a bitcoin which can be traded for another bitcoin. 

        One can buy, sell, trade, or give NFTs to anyone online, but a network of computers must verify the trade and the unique data. NFTs are secured with a unique code assigned with it for authenticity purposes. Customers or fans especially the die-hard loyal ones are willing to pay for the experiences and values and their icons they believe in. Brands can see this as an opportunity by creating unique assets like a exclusive special message for a person on his/her birthday, or any advertisement poster signed by its brand ambassador, collectible digital cards,memoribilia,etc to build stronger relationships with their fanbase. The values of such assets may appreciate over time.

        </p>
      </div>


      <div className=" flex justify-around py-10 text-orange-200 ">
        <div className="px-3 py-3 w-1/4 bg-red-500"> 
        <p className="text-2xl">Connect your Wallet</p>
        <p className="text-lg py-3">Download the Metamask Extension for chrome and login for facilitating transactions on our NFT MarketPlace</p>
        </div>
        <div className="px-3 py-3 w-1/4 bg-green-500"> 
        <p className="text-2xl">create NFT</p>
        <p className="text-lg py-3">Easily create NFTs,add description and set price for you artwork through  "Mint NFTs" Tab  </p>
        </div>
        <div className="px-3 py-3 w-1/4 bg-orange-500">
        <p className="text-2xl">easily sell NFT</p>
        <p className="text-lg py-3">Easy,safe and secure transactions and the amount gets directly deposited in your Metamask wallet .</p>
        </div>
      </div>
    </div>

  )
}