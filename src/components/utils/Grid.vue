<template>
  <div v-if="enable" class="debugs-grid" :style="style">
    <div>
      <lost-container v-if="showGrid" class="grid__container">
        <div v-for="(column, index) in columns" :key="index" class="grid__column" />
      </lost-container>
    </div>
    <div class="grid__panel">
      <div v-if="showPanel">
        <div class="grid__panel__viewport">
          {{ viewport.join(' x ') }} - {{ currentBreakpoint.name }}
        </div>
        <label>
          <span>Show Grid</span><input v-model="showGrid" type="checkbox">
        </label>
        <label>
          <span>Color</span><input v-model="color" type="color">
        </label>
        <div>
          <label v-for="(field, index) in fields" :key="index">
            <span>{{ field.label }}</span><input v-model="currentBreakpoint[field.name]" type="number">
          </label>
        </div>
      </div>
      <span class="grid__panel__toggler" @click="showPanel = !showPanel">
        <span v-if="showPanel">Hide</span><span v-if="!showPanel">Show</span> Grid Settings
      </span>
    </div>
  </div>
</template>

<script>

import LostContainer from '@/components/layouts/LostContainer';
export default {
  components: {
    LostContainer
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    let enable = false;
    if ('$route' in this && 'debug-grid' in this.$route.query) {
      enable = true;
    }

    return {
      viewport: [],
      color: '#ff00FF',

      fields: [
        {
          label: 'Cols',
          type: 'number',
          name: 'cols'
        },
        {
          label: 'Gutter',
          type: 'number',
          name: 'gutter'
        },
        {
          label: 'Width',
          type: 'number',
          name: 'width'
        }
      ],

      breakpoints: [
        {
          name: 'default',
          cols: 12,
          gutter: 0,
          width: 0
        },
        {
          name: 'xs',
          cols: 12,
          gutter: 0,
          width: 0
        },
        {
          name: 'sm',
          cols: 12,
          gutter: 0,
          width: 0
        },
        {
          name: 'md',
          cols: 12,
          gutter: 15,
          width: 992
        },
        {
          name: 'lg',
          cols: 12,
          gutter: 15,
          width: 1200
        }
      ],

      enable,
      showGrid: true,
      showPanel: false
    };
  },

  computed: {
    currentBreakpoint () {
      const breakpoints = Array.from(this.breakpoints).reverse();
      return breakpoints.find(({ width }) => this.viewport[0] >= width) || breakpoints[breakpoints.length - 1];
    },
    style () {
      return {
        '--max-width': this.currentBreakpoint.maxWidth > 0 ? `${this.currentBreakpoint.maxWidth}px` : 'none',
        '--width': this.currentBreakpoint.width > 0 ? `${this.currentBreakpoint.width}px` : '100%',
        '--gutter': `${this.currentBreakpoint.gutter}px`,
        '--columns': `${1 / this.columnCount}`,
        '--color': this.color
      };
    },
    columnCount () {
      return Number(this.currentBreakpoint.cols);
    },
    columns () {
      return Array(this.columnCount);
    }
  },

  mounted () {
    if (this.enable) {
      this.setCurrents(this.currentIndex);
      // eslint-disable-next-line scanjs-rules/call_addEventListener
      global.addEventListener('resize', this.onResize);
      this.onResize();
    }
  },

  methods: {

    onResize () {
      this.viewport = [
        global.innerWidth, global.innerHeight
      ];
    },
    setCurrents (currentBreakpoint) {
      this.currents = Object.assign({}, this.breakpoints[Number(currentBreakpoint)]);
    }
  }
};
</script>

<style lang="postcss">
.debugs-grid {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 0;
  overflow: visible;

  @media (--md) {
    box-sizing: border-box;

    /* max-width: calc(1440px); */

    /* padding: 0 40px; */
  }

  & .grid__panel__viewport {
    padding-top: 10px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }

  & > div:first-child {
    pointer-events: none;
  }

  & .grid__panel__toggler {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
    transform: translateY(100%);
  }

  & .grid__container {
    height: 100vh;
    margin: 0;

    /* display: flex;
    flex-flow: row wrap;
    max-width: var(--max-width);
    /* height: 100vh; */
    margin-right: auto;
    margin-left: auto;

    & > div {
      height: 100vh;
    }
  }

  & .grid__column {
    position: relative;
    flex-basis: calc(99.9% * var(--columns) - (var(--gutter) - var(--gutter) * var(--columns)));
    flex-grow: 0;
    flex-shrink: 0;
    width: calc(99.9% * var(--columns) - (var(--gutter) - var(--gutter) * var(--columns)));
    max-width: calc(99.9% * var(--columns) - (var(--gutter) - var(--gutter) * var(--columns)));
    height: 100%;
    margin-left: var(--gutter);
    pointer-events: none;

    &:first-child {
      margin-left: 0;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: var(--color);
      opacity: 0.4;
    }

    &:nth-child(odd) {
      &::before {
        opacity: 0.2;
      }
    }

  }

  & .grid__panel {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 10px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 8px 0 black;
    backdrop-filter: blur(4px);

    & label {
      display: flex;
      margin: 10px 10px;

      & span {
        display: inline-block;
        align-self: center;
        min-width: 80px;
        font-weight: bold;
        color: black;

        &::after {
          content: ":";
        }
      }

    }

    & input,
    & select {
      box-sizing: border-box;
      display: inline-block;
      width: 100px;
    }
  }
}

</style>
