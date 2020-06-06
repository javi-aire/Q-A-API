exports.cache = new Map()

exports.getDistance = (hex1, hex2) => {
  let rgb1 = hexToRgb(hex1),
     rgb2 = hexToRgb(hex2);

  const distance = Math.sqrt(((rgb2.r - rgb1.r) ** 2) + ((rgb2.g - rgb1.g) ** 2) + ((rgb2.b - rgb1.b) ** 2));
  
  if(distance <= 20) {
    return distance;
  }

  return false;
}


// obtained this function from: https://stackoverflow.com/a/5624139
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
