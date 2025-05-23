const HomePage = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20">
      <div className="layout-content-container">
        <div className="@container">
          <div 
            className="flex flex-col gap-6 sm:gap-8 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end p-6 sm:p-8 md:p-12 min-h-[50vh] sm:min-h-[60vh] md:min-h-[480px]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("your-hero-image-url")'
            }}
          >
            <div className="flex flex-col gap-4 text-left max-w-xl">
              <h1 className="text-primary text-4xl @[480px]:text-5xl @[640px]:text-6xl font-black leading-tight tracking-tighter">
                Hi, I'm Your Name
              </h1>
              <p className="text-gray-300 text-base @[480px]:text-lg leading-relaxed">
                A passionate developer focused on creating intuitive and engaging web applications. 
                I specialize in crafting digital solutions that seamlessly blend modern technologies 
                with exceptional user experience, ensuring every project is both powerful and delightful.
              </p>
            </div>
            <button 
              className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 @[480px]:h-14 @[480px]:px-8 
                bg-primary text-background text-base @[480px]:text-lg font-bold leading-normal 
                tracking-wide hover:bg-white hover:text-background transition-all duration-300 
                shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="truncate">View Projects</span>
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
