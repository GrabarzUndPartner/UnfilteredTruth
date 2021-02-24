<template>
  <canvas :width="width" :height="height" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    width: {
      type: Number,
      default: 400
    },

    height: {
      type: Number,
      default: 100
    }
  },

  data () {
    return {
      currentPos: {
        x: 0,
        y: 0
      },
      direction: {
        x: 0.1,
        y: 0.1
      }
    };
  },

  mounted () {
    const ctx = this.$el.getContext('2d');
    const prerendered = this.prerender();
    const origin = {
      x: (this.$el.width - prerendered.fillText.width) / 2,
      y: (this.$el.height - prerendered.fillText.height) / 2
    };
    ctx.translate(origin.x, origin.y);
    this.draw(this.$el, ctx, prerendered, origin);
  },

  methods: {
    prerender (font = '48px Raleway') {
      return {
        fillText: prerenderFillText(this.text, font),
        strokeText: prerenderStrokeText(this.text, font)
      };
    },

    draw (canvas, ctx, prerendered, origin) {
      ctx.clearRect(-origin.x, -origin.y, canvas.width, canvas.height);

      const diff = {
        x: this.currentPos.x / origin.x,
        y: this.currentPos.y / origin.y
      };

      ctx.filter = `blur(${Math.hypot(diff.x, diff.y) * 5}px)`;
      ctx.drawImage(prerendered.fillText, 0, 0);
      ctx.filter = 'none';
      ctx.drawImage(prerendered.strokeText, this.currentPos.x, this.currentPos.y);

      if (this.currentPos.x < -origin.x || this.currentPos.x > origin.x) {
        this.direction.x = -this.direction.x;
      }

      if (this.currentPos.y < -origin.y || this.currentPos.y > origin.y) {
        this.direction.y = -this.direction.y;
      }

      this.currentPos.x += this.direction.x;
      this.currentPos.y += this.direction.y;

      global.requestAnimationFrame(() => this.draw(canvas, ctx, prerendered, origin));
    }
  }
};

function getTextDimension (text, font = '48px Raleway') {
  const { ctx } = createCanvas();
  ctx.font = font;
  const metrics = ctx.measureText(text);
  return {
    x: metrics.width,
    y: metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
  };
}

function createCanvas () {
  const canvas = global.document.createElement('canvas');
  return { canvas, ctx: canvas.getContext('2d') };
}

function prerenderFillText (text, font = '48px Raleway') {
  const { canvas, ctx } = prepareTextCanvas(text, font);
  ctx.fillText(text, 0, 0);
  return canvas;
}

function prerenderStrokeText (text, font = '48px Raleway') {
  const { canvas, ctx } = prepareTextCanvas(text, font);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  ctx.strokeText(text, 0, 0);
  return canvas;
}

function prepareTextCanvas (text, font) {
  const { canvas, ctx } = createCanvas();
  const dimension = getTextDimension(text, font);

  canvas.width = dimension.x;
  canvas.height = dimension.y;
  ctx.font = font;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.translate(dimension.x / 2, dimension.y / 2);
  return { canvas, ctx };
}

// global.requestAnimationFrame(() => this.draw(ctx));
</script>

<style lang="postcss" scoped>
div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;

  & h2 {
    position: absolute;
    margin: 0;
    font-size: 7em;

    &.filled {
      filter: blur(3px);
    }

    &.outline {
      color: black;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px red;
    }
  }
}

/* css */
</style>
