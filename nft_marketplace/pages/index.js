import React from "react";
export default function Home() {
  const images = [
    "https://i.cdn.newsbytesapp.com/images/l72420220107103458.jpeg",
    "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  ];

  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
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
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="py-5 bg-slate-200">
      <div className="flex items-center justify-center w-full p-12 max-h-1/4">
        <div className="relative w-full">
          <div
            className="inline-flex overflow-x-hidden carousel"
            styles={{
              "scroll-snap-type": "x mandatory",
            }}
          >
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className="flex-shrink-0 w-auto" key={img} ref={refs[i]}>
                <img src={img} className="object-contain w-full" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>

      <div className="py-5 px-7">
        <p className="text-4xl">About NFTs...</p>
        <p className="py-4 text-xl text-justify">
          NFTs or Non-Fungible Tokens are digital tokens that represent
          ownership of any unique asset like art, collectibles, music, popular
          moments of history, even real estate. At a time, an NFT can have only
          one official owner in the world as it is stored and secured using
          Blockchain technology, which means no one can modify the ownership of
          an NFT which exists. The ownership can be sold to another person and
          only then it will be reflected on Blockchain. "Non-Fungible" means
          something which is unique, which is only one of its kind and which is
          not interchangeable. For example, a limited- edition Football player
          collectible card which is only one in the entire world and which can’t
          be exchanged for another one because similar card doesn’t exist.
          Whereas, "Fungible" means something which can be exchanged for another
          similar entity, something which isn’t unique. Like a 10 rupees note
          can be exchanged for another 10 rupees note or a bitcoin which can be
          traded for another bitcoin. 
          <br/><br/>
          One can buy, sell, trade, or give NFTs to
          anyone online, but a network of computers must verify the trade and
          the unique data. NFTs are secured with a unique code assigned with it
          for authenticity purposes. Customers or fans especially the die-hard
          loyal ones are willing to pay for the experiences and values and their
          icons they believe in. Brands can see this as an opportunity by
          creating unique assets like a exclusive special message for a person
          on his/her birthday, or any advertisement poster signed by its brand
          ambassador, collectible digital cards,memoribilia,etc to build
          stronger relationships with their fanbase. The values of such assets
          may appreciate over time.
        </p>
      </div>

      <div className="my-10 text-4xl text-center">
        Resources For Getting Started
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-sm  hover:shadow-2xl">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://opensea.io/blog/wp-content/uploads/2021/02/creating-selling-nfts.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
               <a href="https://youtu.be/Af_lQ1zUnoM" target={"_blank"}>
                Setting Up Metamask Wallet
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-sm  hover:shadow-2xl">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://opensea.io/blog/wp-content/uploads/2022/02/image-13.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
               <a href="https://youtu.be/c_MW2GuJYRo" target={"_blank"}>
                NFT Security and Privacy
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div className="  flex justify-center hover:shadow-2xl">
          <div className="rounded-lg shadow-xl bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://www.goodreturns.in/img/2021/06/polygon-network-logo-1622690786.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <a href="https://youtu.be/GWUwFDFOipo" target={"_blank"}>
              <h5 className="py-8 text-gray-900 text-xl font-medium mb-2">Polygon Blockchain Explained</h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-10 py-10 my-10 bg-blue-50 justify-evenly">
        <div className="flex justify-center ">
          <div className=" rounded-lg   max-w-sm ">
            <img
              className="rounded-t-lg px-20"
              src="https://opensea.io/static/images/icons/wallet.svg"
              alt=""
            />

            <div className="p-6 ">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Connect Your Wallet
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Download the Metamask Extension for chrome and login for
                facilitating transactions on our NFT MarketPlace
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="rounded-lg  max-w-sm">
            <img
              className="rounded-t-lg px-20"
              src="https://opensea.io/static/images/icons/nft.svg"
              alt=""
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Create NFT</h5>
              <p className="text-gray-700 text-base mb-4">
                Upload your work, add a title and description, and customize
                your NFTs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-lg  max-w-sm">
            <img
              className="rounded-t-lg px-20"
              src="https://opensea.io/static/images/icons/collection.svg"
              alt=""
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Create your collection
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Click{" "}
                <a href="/marketplace" className="text-blue-800 ">
                  <span className="font-bold">My Collections</span>
                </a>{" "}
                and set up your collection. Add a description, profile and
                banner images, and set a secondary sales fee.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-lg  max-w-sm">
            <img
              className="rounded-t-lg px-20"
              src="https://opensea.io/static/images/icons/sale.svg"
              alt=""
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Trade NFTs</h5>
              <p className="text-gray-700 text-base mb-4 styles.centerAlign">
                Easy,safe and secure transactions and the amount gets directly
                deposited in your Metamask wallet .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-blue-100">
              <p className="px-20 py-20    ">
                Created By:
                <br/>
                Aishwarya Pardhi | Ajinkya Wadekar | Gaurav Laud | Shounik Shukla | Varad Loya 
              </p>
      </div> */}
    </div>
  );
}
