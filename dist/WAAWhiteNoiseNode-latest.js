(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var WAAWhiteNoiseNode = require('./lib/WAAWhiteNoiseNode')
module.exports = WAAWhiteNoiseNode
if (typeof window !== 'undefined') window.WAAWhiteNoiseNode = WAAWhiteNoiseNode
},{"./lib/WAAWhiteNoiseNode":2}],2:[function(require,module,exports){
var WAAWhiteNoiseNode = module.exports = function(context) {
  this.context = context

  // Generate a random buffer
  this._buffer = context.createBuffer(1, 131072, context.sampleRate)
  var channelArray = this._buffer.getChannelData(0), i
  for (i = 0; i < 131072; i++) 
    channelArray[i] = (Math.random() * 2) - 1

  this._prepareOutput()
}

WAAWhiteNoiseNode.prototype.connect = function() {
  this._output.connect.apply(this._output, arguments)
}

WAAWhiteNoiseNode.prototype.disconnect = function() {
  this._output.disconnect.apply(this._output, arguments)
}

WAAWhiteNoiseNode.prototype.start = function() {
  this._output.start.apply(this._output, arguments)
}

WAAWhiteNoiseNode.prototype.stop = function() {
  this._output.stop.apply(this._output, arguments)
  this._prepareOutput()
}

WAAWhiteNoiseNode.prototype._prepareOutput = function() {
  this._output = this.context.createBufferSource()
  this._output.buffer = this._buffer
  this._output.loop = true
}
},{}]},{},[1]);
