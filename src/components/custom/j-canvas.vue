
<template>
<div :style="styleComponent">
  <canvas ref="canvas" :width='myPixelWidth' :height='myPixelHeight'></canvas>
  <!-- {{ msg }}  -->
</div>
</template>

<script>
/* eslint-disable */
import { extend } from 'quasar'
import MoeUtils from '../../moe/utils/moe.utils.js'

export default {
  name: 'j-canvas',
  
  components: { },

  props: {
    width: {  // display width
      type: String,
      default: '100%'
    },
    height: { // display height
      type: String,
      default: '100%'
    },
    pixelWidth: { // canvas pixels
      type: Number,
      default: 256
    },
    pixelHeight: { // canvas pixels
      type: Number,
      default: 256
    },
    value: {
      type: [Object, Array, ImageData, Image]
    }
  },

  data () {
    return {
      ctx: null,
      id: 'j-canvas-1',
      msg: '',
      myPixelWidth: 256
    }
  },

  computed: {
    myImageData () {
      let v = this.value
      console.log('compute CANVAS myValue AND set myImageData and RENDER from value =>', v)
      if (!v) {
        return undefined
      }
      if (typeof v === ImageData) {
        return extend({}, v)
      }
      this.myValue = extend({}, newVal)
    },
    styleComponent () {
      return {
        width: this.width,
        height:  this.showPalette ? this.height * 2 : this.height
      }
    },
    myPixelHeight () {
      return this.showPalette ? 256 : 256
    }
  },
  watch: {
    value: {
      handler (newVal) {
        console.log( "watch CANVAS VALUE->", newVal)

        let imgData
        let msg

        // undefined / empty 
        if (!newVal) {
          msg = 'undefined'
          imgData = MoeUtils.imageDataEmpty()
        }

        // ImageData
        else if (typeof newVal === ImageData) {
          msg = 'ImageData'
          imgData = extend({}, newVal)
        }

        // Array (of colors)
        else if (Array.isArray(newVal)) {
          msg = 'Array'
          imgData = MoeUtils.imageDataFromColors(newVal)
        }

        // pixels & colors
        else if (newVal.pixels && newVal.colors) {
          msg = 'Pixels & Colors'
          imgData = MoeUtils.imageDataFromPixelsAndColors(newVal)
        }

        // bitmap
        else if (newVal.pixels && newVal.palette) {
          msg = 'bitmap'
          imgData = MoeUtils.imageDataFromBitmap(newVal)
        }

        // Colors Only (render palette preview)
        else if (newVal.colors) {
          msg = '.colors'
          imgData = MoeUtils.imageDataFromColors(newVal.colors)
        }

        // Pixels Only (render pixels in greyscale)
        else if (newVal.pixels) {
          msg = '.pixels'
          imgData = MoeUtils.imageDataFromPixels(newVal.pixels)
        }

        // unknown 
        else {
          msg = 'unknown'
          imgData = MoeUtils.imageDataEmpty()
        }

        console.log('CANVAS TYPE: *' + msg + '*')

        this.msg = msg
        this.$nextTick(function() {
          this.updateImage(imgData)
        })        

      },
      immediate: true
    },        
    // Data input Prop Types:
    //
    imageData: {
      handler (newVal) {
        //console.log("watch CANVAS imageData->", newVal)
        //this.updateImage(newVal)
      },
      immediate: false
    }
  },
  methods: {

    updateImage (imgData) {
      // const imageData = this.myImageData
      // console.log('UPDATE IMAGEDATA', imgData)
      if (imgData instanceof ImageData) {
        this.ctx.putImageData(imgData, 0, 0)
        // this.myImageData = this.ctx.getImageData(0, 0, this.pixelWidth, this.pixelHeight)
      }
      else {
        // draw error on canvas
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, 256, 256)
        this.ctx.fillStyle = 'red'
        this.ctx.font = '30px Comic Sans MS'
        this.ctx.textAlign = 'center'
        this.ctx.fillText('No ImgData', 128, 128)
      }

    },
    // get canvas FROM...
    fromImageData (imageData) {
      
      // this.myImageData = imageData
      // this.updateImage()
    },
    fromRGBA (rgba) { // @rgba = UInt8Array
      for (var i = 0, l = rgba.length; i < l; i++) {
        this.myImageData.data[i] = rgba[i]
      }
      this.updateImage()
    },
    fromImage (img) {
      console.log('j-canvas.fromImage() with ', img)
      this.ctx.drawImage(0, 0, this.pixelWidth, this.pixelHeight)
      this.imageData = this.ctx.getImageData(0, 0, this.pixelWidth, this.pixelHeight)
      this.updateImage()
    },
    // GET from canvas...
    getCanvas () {
      return this.$refs.canvas
    },
    getImageData () {
      return this.myImageData
    },
    getImage () {
      return null
    },
    getRGBA () {
      return null
    }
  },
  ready () {
    this.test1 = 'test1'
  },
  mounted () {
    this.ctx = this.$refs.canvas.getContext('2d')
    // this.myImageData = this.ctx.getImageData(0, 0, this.pixelWidth, this.pixelHeight)
  }
}
</script>

<style lang="stylus">
  canvas
    width 100%
    height 100%
</style>
