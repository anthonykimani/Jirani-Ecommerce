const Navbar = () => {
    return (
      <div>
          <div className="flex justify-around items-center p-2">
          <i className='bx bx-menu bx-md'></i>
          <h2>Jirani Stores</h2>
          </div>
          <div className="flex justify-between overflow-hidden items-center border border-gray-200 w-[400px] rounded-full ">
          <i className='bx bx-search bx-sm p-1'></i>
              <input type="text" placeholder="Search anything.." className="w-[380px] border-none" />
          </div>
      </div>
    );
  };
  
  export default Navbar;
  