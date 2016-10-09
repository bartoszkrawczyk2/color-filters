export default (imageData, value, ctx, canvas) => {
    let _c = document.createElement('canvas');
    let _ctx = _c.getContext('2d');
    _c.width = canvas.width;
    _c.height = canvas.height;

    let radiusSize = _c.height > _c.width ? _c.height : _c.width;

    _ctx.putImageData(new ImageData(imageData, canvas.width, canvas.height), 0, 0);
    _ctx.rect(0, 0, _c.width, _c.height);

    let vignette = _ctx.createRadialGradient(
        _c.width / 2,
        _c.height / 2,
        (radiusSize * (1 - value.size)) / 2,
        _c.width / 2,
        _c.height / 2,
        radiusSize * (1 - value.size),
    );
    
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, `rgba(0,0,0,${value.strength}0)`);

    _ctx.fillStyle = vignette;
    _ctx.fill();

    return _ctx.getImageData(0, 0, _c.width, _c.height).data;
}