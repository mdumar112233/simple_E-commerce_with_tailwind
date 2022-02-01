import hero from "./images/hero-img.svg";
import menProduct1 from "./images/products/men/product1.jpg";
import menProduct2 from "./images/products/men/product2.jpg";
import menProduct3 from "./images/products/men/product3.jpg";
import menProduct4 from "./images/products/men/product4.jpg";

function App() {
  return (
    <div className="container  mx-auto p-5">
      <div className="md:flex md:justify-between md:flex-row text-center">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-t from-purple-600 to-red-500 w-10 h-10 rounded-lg"></div>
          <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
        </div>
        <div className="mt-2">
          <a href="" className="text-gray-600 hover:text-purple-600 p-4">
            Home
          </a>
          <a href="" className="text-gray-600 hover:text-purple-600 p-4">
            Shop
          </a>
          <a href="" className="text-gray-600 hover:text-purple-600 p-4">
            Blog
          </a>
          <a href="" className="text-gray-600 hover:text-purple-600 p-4">
            Contact
          </a>
          <a
            href=""
            className="bg-purple-600 hover:bg-purple-700 text-gray-50  rounded-full p-3 px-5 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart (0)
          </a>
        </div>
      </div>{" "}
      {/* Main navigation  */}
      <div className="md:flex md:flex-row mt-20">
        <div className="md:w-2/5 flex flex-col justify-center items-center">
          <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:text-left md:self-start">
            Some Catchy Title Here
          </h2>
          <p className="uppercase text-gray-600 tracking-wide text-center md:text-left md:self-start">
            Our brand tagline goes here
          </p>
          <p className="uppercase text-gray-600 tracking-wide text-center md:text-left md:self-start">
            Our brand tagline goes here
          </p>
          <a
            href=""
            className="bg-gradient-to-t from-red-600 to-pink-500 rounded-full px-8 py-4 text-gray-50 text-xl md:self-start my-5"
          >
            SHOP NOW
          </a>
        </div>
        <div className="md:w-3/5">
          <img src={hero} alt="hero" className="w-full" />
        </div>
      </div>{" "}
      {/* Hero section  */}
      <div className="my-20">
        <div className="flex flex-row justify-between">
          <h2 className="lg:text-3xl md:text-2xl text-xl ">Men's Collection</h2>
          <a href="#" className="text-base sm:text-xl flex flex-row items-center">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="shadow-lg ">
          <a href="#">
            <img src={menProduct1} alt="" className="rounded-tl-lg rounded-tr-lg" />
          </a>
          <div className="p-5">
            <h3><a href="#">Men's T-shirt</a></h3>
            <div className="flex flex-row my-3">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-3">
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XXL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">L</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">M</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">S</div>
            </div>

            <div className="flex flex-row justify-between">
              <a href="#" className="bg-gradient-to-t from-red-600 to-pink-500 rounded-full px-3 py-2 text-gray-50 text-sm">
                Add to cart
              </a>
              <a href="#" className="bg-purple-800 rounded-full px-3 py-2 text-gray-50 text-sm">
                View Details
              </a>
            </div>
          </div>
          
        </div>

        <div className="shadow-lg ">
          <a href="#">
            <img src={menProduct2} alt="" className="rounded-tl-lg rounded-tr-lg" />
          </a>
          <div className="p-5">
            <h3><a href="#">Men's T-shirt</a></h3>
            <div className="flex flex-row my-3">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-3">
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XXL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">L</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">M</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">S</div>
            </div>

            <div className="flex flex-row justify-between">
              <a href="#" className="bg-gradient-to-t from-red-600 to-pink-500 rounded-full px-3 py-2 text-gray-50 text-sm">
                Add to cart
              </a>
              <a href="#" className="bg-purple-800 rounded-full px-3 py-2 text-gray-50 text-sm">
                View Details
              </a>
            </div>
          </div>
          
        </div>

        <div className="shadow-lg ">
          <a href="#">
            <img src={menProduct3} alt="" className="rounded-tl-lg rounded-tr-lg" />
          </a>
          <div className="p-5">
            <h3><a href="#">Men's T-shirt</a></h3>
            <div className="flex flex-row my-3">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-3">
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XXL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">L</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">M</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">S</div>
            </div>

            <div className="flex flex-row justify-between">
              <a href="#" className="bg-gradient-to-t from-red-600 to-pink-500 rounded-full px-3 py-2 text-gray-50 text-sm">
                Add to cart
              </a>
              <a href="#" className="bg-purple-800 rounded-full px-3 py-2 text-gray-50 text-sm">
                View Details
              </a>
            </div>
          </div>
          
        </div>

        <div className="shadow-lg ">
          <a href="#">
            <img src={menProduct4} alt="" className="rounded-tl-lg rounded-tr-lg" />
          </a>
          <div className="p-5">
            <h3><a href="#">Men's T-shirt</a></h3>
            <div className="flex flex-row my-3">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-3">
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">XXL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">L</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">M</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 ">S</div>
            </div>

            <div className="flex flex-row justify-between">
              <a href="#" className="bg-gradient-to-t from-red-600 to-pink-500 rounded-full px-3 py-2 text-gray-50 text-sm">
                Add to cart
              </a>
              <a href="#" className="bg-purple-800 rounded-full px-3 py-2 text-gray-50 text-sm">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* men's collection */}

      
    </div>
  );
}

export default App;
