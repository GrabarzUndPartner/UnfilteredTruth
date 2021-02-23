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
      context: null,
      currentPos: {
        x: this.width / 2,
        y: this.height / 2
      },
      centerPos: {
        x: this.width / 2,
        y: this.height / 2
      },
      direction: {
        x: 0.3,
        y: 0.3
      },
      dimension: null
    };
  },

  mounted () {
    const ctx = this.$el.getContext('2d');
    ctx.font = '48px Raleway';
    const metrics = ctx.measureText(this.text);
    this.dimension = {
      x: metrics.width,
      y: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    };

    this.draw(ctx);
  },

  methods: {
    draw (ctx) {
      ctx.clearRect(0, 0, this.$el.width, this.$el.height);

      const origin = {
        x: this.currentPos.x - this.dimension.x / 2,
        y: this.currentPos.y + this.dimension.y / 2
      };

      ctx.filter = 'none';
      ctx.strokeText(this.text, origin.x, this.currentPos.y + this.dimension.y / 2);

      const diffX = this.currentPos.x - this.centerPos.x;
      const diffY = this.currentPos.y - this.centerPos.y;

      ctx.filter = `blur(${Math.hypot(diffX, diffY) / 20}px)`;
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;

      const x = this.centerPos.x - this.dimension.x / 2;
      const y = this.centerPos.y + this.dimension.y / 2;
      ctx.fillText(this.text, x, y);

      if (origin.x < 0 || origin.x > this.width - this.dimension.x) {
        this.direction.x = -this.direction.x;
      }
      if (origin.y < 0 + this.dimension.y || origin.y > this.height) {
        this.direction.y = -this.direction.y;
      }

      this.currentPos.x += this.direction.x;
      this.currentPos.y += this.direction.y;
      global.requestAnimationFrame(() => this.draw(ctx));
    }
  }
};

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
