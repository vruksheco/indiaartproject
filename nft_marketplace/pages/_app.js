import "../styles/globals.css";
import "./app.css";
import Link from "next/link";
import { useRouter } from "next/router";
function NFTmarketplace({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <div>
        <nav className="z-10 w-full shadow-sm bg-blue-200   ">
          <div className="flex items-center w-full h-20 ">
            <div className="flex items-center justify-between w-full mx-20">
              <div className="flex items-center justify-center flex-shrink-0 ">
                <h1 className="text-xl font-bold ">
                  Maniac<span className="text-blue-500">NFT</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link href="/">
                  <p className="px-3 py-2 text-sm font-bold cursor-pointer text-black rounded-md hover:bg-blue-600 hover:text-white">
                    Home
                    </p>
                  </Link>
                  <Link
                    href="/Marketplace"
                    activeClass="about"
                  >
                    <p className="px-3 py-2 text-sm font-bold text-black  cursor-pointer rounded-md hover:bg-blue-600 hover:text-white">
                    MarketPlace
                    </p>
                  </Link>
                  <Link
                    href="/my-nfts"
                    activeClass="Services"
                  >
                    <p className="px-3 py-2 text-sm font-bold cursor-pointer text-black rounded-md hover:bg-blue-600 hover:text-white">
                    My NFts
                    </p>
                  </Link>

                  <Link
                    activeClass="contact"
                    href="/creator-dashboard"
                    className="px-3 py-2  text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-black"
                  >
                    <p className="px-3 py-2 text-sm font-bold cursor-pointer text-black rounded-md hover:bg-blue-600 hover:text-white">
                    CreatorBoard
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <Nav /> */}
      {/* <nav className="p-6 border-b" style={{ backgroundColor: "#00539CFF" }}>
        <p className="pt-3 font-bold text-center text-orange-300 text-4x1">
          ManiacNFT{" "}
        </p>

        <div className="flex justify-center mt-4">
          <Link href="/">
            <a className="mr-4 font-semibold text-orange-200 no-underline">
              Home
            </a>
          </Link>
          <Link href="/Marketplace">
            <a className="mr-6 font-semibold text-orange-200 no-underline ">
              Marketplace
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 font-semibold text-orange-200 no-underline ">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 font-semibold text-orange-200 no-underline">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav> */}
      <Component {...pageProps} />
    </div>
  );
}

export default NFTmarketplace;
