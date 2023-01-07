const DealSlideshow = () => {
  return (
    <div className="flex justify-around">
      <div
        className="bg-white shadow-lg w-[600px] h-[500px] object-fill bg-no-repeat  m-1 flex flex-col justify-end "
        style={{
          backgroundImage: `url("https://ke.jumia.is/cms/2023/WK1/Slider/Beautyrvsd.jpg")`,
        }}
      >
       <h3 className="font-poppins text-3xl ">Save big on overstocked tech.</h3>
       <h4 className="text-lg font-poppins">Sale ends January 12.</h4>
       <button className="bg-blue-900 text-white p-3 rounded-md font-poppins font-semibold w-[150px]">Shop Now</button>
      </div>    
      <div>
        <div
          className="bg-white shadow-lg w-[600px] h-[250px] object-cover bg-no-repeat m-1"
          style={{
            backgroundImage: `url("https://ke.jumia.is/cms/2023/WK1/Slider/Beautyrvsd.jpg")`,
          }}
        >
          Hello world
        </div>
        <div className="flex justify-around">
          <div
            className="bg-white shadow-lg w-[300px] h-[250px] object-cover bg-no-repeat m-1"
            style={{
              backgroundImage: `url("https://ke.jumia.is/cms/2023/WK1/Slider/Beautyrvsd.jpg")`,
            }}
          >
            Hello world
          </div>
          <div
            className="bg-white shadow-lg w-[300px] h-[250px] object-cover bg-no-repeat m-1"
            style={{
              backgroundImage: `url("https://ke.jumia.is/cms/2023/WK1/Slider/Beautyrvsd.jpg")`,
            }}
          >
            Hello world
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSlideshow;
