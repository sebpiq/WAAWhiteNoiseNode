WAAWhiteNoiseNode
==================

A white noise node for Web audio API.

**Note** : The method used to generate noise is terrible (looping over a random buffer), and so the white noise really isn't one ... but that method is the only way at the moment to generate noise with native audio nodes.


Installation
-------------

You can grab the latest browser build from [dist/](https://github.com/sebpiq/WAAWhiteNoiseNode/blob/master/dist/WAAWhiteNoiseNode-latest.js) or install through npm with `npm install waawhitenoise` 


Usage
-------

Create :

```javascript
var context = new AudioContext()
  , noiseNode = new WAAWhiteNoiseNode(context)
```

Connect :

```javascript
// `WAAWhiteNoiseNode.connect` takes the same arguments as `AudioNode.connect`
noiseNode.connect(someOtherNode)
```

Start / Stop :

```javascript
// Start at currentTime = 0.5 seconds
noiseNode.start(0.5)
// Stop at currentTime = 10 seconds
noiseNode.stop(0.5)
```


Build
-------

`npm run build`


Run the tests
---------------

Run `npm build.tests`. It will create a `waatest` folder in the root of the package. Then open `waatest/index.html` in a web browser.