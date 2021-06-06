const clockAngles = (minutes) => {
    let minuteAngle = 6 * (minutes % 60);
    let hourAngle = 0.5 * (minutes % 3600);
  
    let finalAngle = Math.abs(minuteAngle - hourAngle);
  
    return finalAngle;
  }
  
  console.log(clockAngles(360));//should be 180
  console.log(clockAngles(180));//should be 90
  console.log(clockAngles(210));
  console.log(clockAngles(588));