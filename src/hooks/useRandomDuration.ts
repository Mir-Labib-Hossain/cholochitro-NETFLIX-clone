const useRandomDuration = () => {
  const durations = ["120 min", "123 min", "55 min", "220 min", "180 min"];
  var duration = durations[Math.floor(Math.random() * durations.length)];

  return duration;
};

export default useRandomDuration;
