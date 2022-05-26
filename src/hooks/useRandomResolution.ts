const useRandomResolution = () => {
  const resolutions = ["HD", "4K", "BluRay", "420px", "3D"];
  var resolution = resolutions[Math.floor(Math.random() * resolutions.length)];

  return resolution;
};

export default useRandomResolution;
