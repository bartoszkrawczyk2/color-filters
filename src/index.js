import curves from './adjustments/curves';
import brightness from './adjustments/brightness';
import contrast from './adjustments/contrast';
import vignette from './adjustments/vignette';
import saturation from './adjustments/saturation';
import builtInFilters from './builtInFilters';

let adjustments = {
    curves,
    brightness,
    contrast,
    vignette,
    saturation,
} 

export const process = (img, filter = [], cb = () => {}) => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    let imageData = new Uint8ClampedArray(ctx.getImageData(0, 0, img.width, img.height).data);

    for (let f of filter) {
        imageData = adjustments[f.adjustment](imageData, f.value, ctx, canvas);
    }

    ctx.putImageData(new ImageData(imageData, img.width, img.height), 0, 0);
    canvas.toBlob((blob) => {
        let img = new Image();
        img.onload = () => {
            cb.call(null, img);
        };
        img.src = URL.createObjectURL(blob);
    });
};

export const FILTERS = builtInFilters;