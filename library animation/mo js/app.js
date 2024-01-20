document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("mo-wrapper");
  const burst = new mojs.Burst({
    parent: el,
    count: 5,
    radius: { 50: 150 },
    children: {
      shape: "cross",
      stroke: "teal",
      strokeWidth: { 6: 0 },
      angle: { 360: 0 },
      radius: { 30: 90 },
      duration: 3000,
    },
  });

  el.addEventListener("click", () => {
    burst.replay();
  });
});
