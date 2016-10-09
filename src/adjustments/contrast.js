export default (imageData, value = 0, ctx) => {
    let contrast = value + 1;
    let intercept = 128 * (1 - contrast);

    for (let i = 0; i < imageData.length; i += 4) {
        imageData[i] = imageData[i] * contrast + intercept;
        imageData[i+1] = imageData[i+1] * contrast + intercept;
        imageData[i+2] = imageData[i+2] * contrast + intercept;
    }

    return imageData;
}