var WAAWhiteNoise = module.exports = function(context) {
  this.context = context

  // Generate a random buffer
  this._buffer = context.createBuffer(1, 131072, context.sampleRate)
  var channelArray = this._buffer.getChannelData(0), i
  for (i = 0; i < 131072; i++) 
    channelArray[i] = (Math.random() * 2) - 1

  this._prepareOutput()
}

WAAWhiteNoise.prototype.connect = function() {
  this._output.connect.apply(this._output, arguments)
}

WAAWhiteNoise.prototype.disconnect = function() {
  this._output.disconnect.apply(this._output, arguments)
}

WAAWhiteNoise.prototype.start = function() {
  this._output.start.apply(this._output, arguments)
}

WAAWhiteNoise.prototype.stop = function() {
  this._output.stop.apply(this._output, arguments)
  this._prepareOutput()
}

WAAWhiteNoise.prototype._prepareOutput = function() {
  this._output = this.context.createBufferSource()
  this._output.buffer = this._buffer
  this._output.loop = true
}