import React from 'react';

export default function Home() {
  const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']

  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );
  
  return (
    

    <div className=" px-7 py-5">

<div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
      <div className="relative w-full">
        <div className="carousel inline-flex overflow-x-hidden" styles={{
          'scroll-snap-type': 'x mandatory'
        }}>
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>

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