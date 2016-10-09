# color-filters
Small lib for creating instagram-like filters.

## Install

`npm install color-filters --save`

## API

* Process an image: `process(img, filter, callback)`
* Parameters:
    * `img` - any valid source for canvas (img, canvas, Image object)
    * `filter` - Filter Array - contains list of all adjustments
    * `callback` - callback returning processed image

## Usage

### Use built-in filters:

```javascript
import { process, FILTERS } from 'color-filters';

process(document.getElementById('my-image'), FILTERS['Retro'], (resultImg) => {
    document.body.append(resultImg);
});
```

Available built-in filters:
* NoFilter
* Retro
* 1977
* Noir

### Use custom filter:

```javascript
import { process } from 'color-filters';

let myCustomFilter = [
    {
        adjustment: 'curves',
        value: {                        // x and y points of color curve
            a: [[0, 0], [1, 1]],                            // all channels (brightness)
            r: [[0, 0], [0.2, 0.35], [1, 1]],               // red channel
            g: [[0, 0], [1, 1]],                            // green channel
            b: [[0, 0], [0.63, 0.5], [0.8, 0.9] [1, 1]],    // blue channel
        }
    },
    {
        adjustment: 'brightness',
        value: .1                       // -1 to 1
    },
    {
        adjustment: 'contrast',
        value: .4                       // -1 to 1
    },  
    {
        adjustment: 'vignette',
        value: {
            strength: 0,                // 0 to 1
            size: 0,                    // 0 to 1
        }
    },
    {
        adjustment: 'saturation',
        value: 0                        // -0 to 1
    }
]

process(document.getElementById('my-image'), myCustomFilter, (resultImg) => {
    document.body.append(resultImg);
});
```