import boatImg from "../../assets/barcocard.png";

const CenteredImage = () => {
  return (
    <div className="flex justify-center ">
      <img
        src={boatImg}
        alt="Barco navegando"
        className="h-56 object-cover mx-auto"
      />
    </div>
  );
};

export default CenteredImage;
