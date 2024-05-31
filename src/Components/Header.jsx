const Header = () => {

  return (
    <>
      <div className=" h-20 border main flex justify-between items-center px-16 border-black bg-[#3BEA1E]">
        <div >
          {/* brand logo */}
          <h1 className="text-2xl font-bold">LOGO NAME</h1>
        </div>

        <div className="space-x-4 text-lg flex-center">
          {/* menu links */}
          <a href="/Home" className="hover:underline underline-offset-8 hover:text-blue-600">
            Home
          </a>
          <a href="/Service" className="hover:underline underline-offset-8 hover:text-blue-600">
            Services
          </a>
          <a href="/About" className="hover:underline underline-offset-8 hover:text-blue-600">
            About us
          </a>
          <a href="/Help" className="hover:underline underline-offset-8 hover:text-blue-600">
            Help
          </a>
        </div>


        <div>
          {/* Become seller Buttons */}
          <button className=" bg-yellow-400 hover:bg-blue-600  text-black hover:text-white font-bold py-2 px-4 rounded-xl " >Become seller</button>

        </div>
      </div>
    </>
  );
};

export default Header
