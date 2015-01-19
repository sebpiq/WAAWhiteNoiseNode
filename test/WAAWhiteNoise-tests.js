var assert = require('assert')
  , utils = require('waatest').utils
  , WAAWhiteNoise = require('../index')

describe('WAAWhiteNoise', function() {
  
  it('should generate random values', function(done) {
    var offsetNode
    utils.renderSamples(1, 15, function(context) {
      var noise = new WAAWhiteNoise(context)
      noise.connect(context.destination)
      noise.start(5 / context.sampleRate)
      noise.stop(10 / context.sampleRate)

    }, function(err, block) {
      if (err) return done(err)
      var channelArray = block[0]
        , sample, i
      assert.deepEqual(channelArray.slice(0, 5), [0, 0, 0, 0, 0])
      assert.deepEqual(channelArray.slice(10, 15), [0, 0, 0, 0, 0])
      for (var i = 5; i < 10; i++) {
        sample = channelArray[i]
        assert.ok(sample > -1)
        assert.ok(sample < 1)
      }
      assert.ok(!(channelArray[5] === channelArray[6]
              === channelArray[7] === channelArray[8]
              === channelArray[9]))
      done()
    })

  })

})