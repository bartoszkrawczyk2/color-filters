import RGBtoHSV from 'rgb-hsv';
import HSVtoRGB from 'hsv-rgb';

export default (imageData, value = 0, ctx) => {
    let saturation = value + 1;

    for (let i = 0; i < imageData.length; i += 4) {
        let hsv = RGBtoHSV(imageData[i], imageData[i+1], imageData[i+2]);
        hsv[1] *= saturation;
        let rgb = HSVtoRGB(hsv[0], hsv[1], hsv[2]);
        imageData[i] = rgb[0];
        imageData[i+1] = rgb[1];
        imageData[i+2] = rgb[2];
    }

    return imageData;
}