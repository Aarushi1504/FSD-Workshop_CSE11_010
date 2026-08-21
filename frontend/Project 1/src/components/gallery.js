const gallery = () =>{
    const images = [
   " https://i.pinimg.com/originals/9a/4b/8b/9a4b8b6d4369ef5e5bbc9bc3451de664.jpg",
    "https://i.pinimg.com/736x/91/83/eb/9183ebbf701c012ee3bcdca4074b5675.jpg",
   " https://i.pinimg.com/736x/da/90/30/da903047bac6bc7773f208d1189506c1.jpg",
  " https://img.wattpad.com/a0e6267c31ae7890ba404683d461064c30390e3a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f75367855396251364e62515330513d3d2d313437343438323334312e313766323064323834636466396466333138343338303333383839352e6a7067?s=fit&w=720&h=720",
    ]
     return (
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default gallery;
