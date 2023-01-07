const Navbar = () => {
  return (
    <div className="flex justify-around items-center w-screen bg-white shadow-lg">
      <div className="flex justify-around items-center p-2">
        <i className="bx bx-menu bx-md"></i>
        <h2 className="p-2 text-3xl font-bold">Jirani Stores</h2>
      </div>
      <form className="flex justify-between overflow-hidden items-center ">
      <div className="flex justify-between overflow-hidden items-center border border-gray-200 w-[400px] rounded-full ">
        <i className="bx bx-search bx-sm p-1 text-gray-400"></i>
        <input
          type="text"
          placeholder="Search anything.."
          className="w-[380px] border-0 border-transparent focus:border-transparent"
        />
      </div>
      <input type="submit" value="search" className="bg-gray-200 text-black text-2xl px-5 py-1 rounded-sm"/>
      </form>
      <button className="flex items-center text-lg">
      <i className='bx bx-user bx-sm p-1'></i>
      Accounts
      <i className='bx bx-chevron-down bx-md p-1' ></i>
      </button>
      <button className="flex items-center text-lg">
      <i className='bx bx-cart bx-sm p-1'></i>
      Cart
      <i className='bx bx-chevron-down bx-md p-1' ></i>
      </button>
    </div>
  );
};

export default Navbar;
