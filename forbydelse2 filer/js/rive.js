const riveCanvas = document.getElementById("rive-canvas");

const riveInstance = new rive.Rive({
  src: "animation.riv",
  canvas: riveCanvas,
  stateMachines: "State Machine 1",
  autoplay: true,
  layout: new rive.Layout({
    fit: rive.Fit.Width,                 
    alignment: rive.Alignment.TopCenter  
  }),
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
});

// Sikrer korrekt resize ved skærmskift
window.addEventListener("resize", () => {
  riveInstance.resizeDrawingSurfaceToCanvas();
});