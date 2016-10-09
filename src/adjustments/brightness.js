export default (imageData, value = 0, ctx) => {
    let adjustment = 255 * value;

    for (let i = 0; i < imageData.length; i += 4) {
        imageData[i] += adjustment;
        imageData[i+1] += adjustment;
        imageData[i+2] += adjustment;
    }

    return imageData;
}