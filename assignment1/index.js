class TrafficLight {
    constructor() {
      this.colors = ["Red", "Yellow", "Green"];
      this.colorIndex = 0;
      this.eventEmitter = new EventEmitter();
    }
  
    start() {
      this.trafficLightCycle();
    }
  
    trafficLightCycle() {
      const currentColor = this.colors[this.colorIndex];
      console.log(currentColor);
      this.eventEmitter.emit("colorChange", currentColor);
  
      const duration = this.getColorDuration(currentColor);
  
      setTimeout(() => {
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        this.trafficLightCycle();
      }, duration);
    }
  
    getColorDuration(color) {
      switch (color) {
        case "Red":
          return 5000; // 5 secs
        case "Yellow":
          return 2000; // 2 secs
        case "Green":
          return 5000; // 5 secs
        default:
          return 1000; // Default duration
      }
    }
  
    onColorChange(callback) {
      this.eventEmitter.on("colorChange", callback);
    }
  }
  
  const trafficLight = new TrafficLight();
  
  trafficLight.onColorChange((color) => {
    console.log('The light just changed to ${color}');
  });
  
  trafficLight.start();