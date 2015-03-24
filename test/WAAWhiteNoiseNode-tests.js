var assert = require('assert')
  , _ = require('underscore')
  , utils = require('waatest').utils
  , WAAWhiteNoiseNode = require('../index')

describe('WAAWhiteNoiseNode', function() {
  
  it('should generate random values', function(done) {
    var offsetNode
    utils.renderSamples(1, 15, function(context) {
      var noise = new WAAWhiteNoiseNode(context)
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
      assert.equal(_.uniq(channelArray.slice(5, 10)).length, 5)
      done()
    })

  })

})