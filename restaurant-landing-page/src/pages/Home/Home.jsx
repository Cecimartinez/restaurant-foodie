import BannerImage from "../../assets/home-banner-image.png";
import BannerImageBg from "../../assets/home-banner-background.png";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container relative flex pt-3">
        <div className="home-bannerImage-container absolute ">
          <img src={BannerImageBg} alt="Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading text-3xl text-[#4c4c4c] max-w-xl">
          Tu comida favorita, fresca y lista para disfrutar.          </h1>
          <p className="primary-text text-[#6a6a6a] text-base my-6 max-w-md">
          Nuestros chefs se encargan de todas las tareas de preparación, como pelar, cortar y marinar, para que puedas degustar una comida elaborada.
          </p>
          <button className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-9 rounded-3xl text-lg cursor-pointer font-semibold text-white flex  items-center justify-center transition-all hover:bg-[#e48f0f]">
            Order Now
            <span className="material-symbols-outlined ml-3 text-2xl">
              arrow_right_alt
            </span>
          </button>
        </div>
        <div className="home-image-section flex-1 max-w-xl">
          <img src={BannerImage} alt="Banner"  className=""/>
        </div>
      </div>
    </div>
  );
};