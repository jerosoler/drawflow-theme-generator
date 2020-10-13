

ELEMENT.locale(ELEMENT.lang.en)

new Vue({
  el: '#app',
  data: function() {
    return {
      editor: null,
      activeNames: 1,
      dialogVisible: false,
      precode: '',
      code: '',
      SelectBackground: 'color',
      SelectBackgroundOptions: [{
          value: 'color',
          label: 'Color'
        }, {
          value: 'grid',
          label: 'Grid'
        }, {
          value: 'dots',
          label: 'Dots'
        }],

      SelectNode: 'flex',
      SelectNodeOptions: [{
          value: 'flex',
          label: 'Flex'
        }, {
          value: 'block',
          label: 'Block'
        }],

      SelectDelete: 'block',
      SelectDeleteOptions: [{
          value: 'block',
          label: 'Block'
        }, {
          value: 'none',
          label: 'None'
        }],

      dfBackgroundColor: '#ffffff',
      dfBackgroundSize: '0',
      dfBackgroundImage: 'none',
      dfBackgroundImageColor: '#ffffff',

      dfNodeType: 'flex',
      dfNodeTypeFloat: 'none',
      dfNodeBackgroundColor: '#ffffff',
      dfNodeTextColor: '#000000',
      dfNodeBorderSize: '2',
      dfNodeBorderColor: '#000000',
      dfNodeBorderRadius: '4',
      dfNodeMinHeight: '40',
      dfNodeMinWidth: '160',
      dfNodePaddingTop: '15',
      dfNodePaddingBottom: '15',
      dfNodeBoxShadowHL: '0',
      dfNodeBoxShadowVL: '2',
      dfNodeBoxShadowBR: '15',
      dfNodeBoxShadowS: '2',
      dfNodeBoxShadowColor: '#000000',

      dfNodeHoverBackgroundColor: '#ffffff',
      dfNodeHoverTextColor: '#000000',
      dfNodeHoverBorderSize: '2',
      dfNodeHoverBorderColor: '#000000',
      dfNodeHoverBorderRadius: '4',

      dfNodeHoverBoxShadowHL: '0',
      dfNodeHoverBoxShadowVL: '2',
      dfNodeHoverBoxShadowBR: '15',
      dfNodeHoverBoxShadowS: '2',
      dfNodeHoverBoxShadowColor: '#4ea9ff',

      dfNodeSelectedBackgroundColor: '#000000',
      dfNodeSelectedTextColor: '#ffffff',
      dfNodeSelectedBorderSize: '2',
      dfNodeSelectedBorderColor: '#000000',
      dfNodeSelectedBorderRadius: '4',

      dfNodeSelectedBoxShadowHL: '0',
      dfNodeSelectedBoxShadowVL: '2',
      dfNodeSelectedBoxShadowBR: '15',
      dfNodeSelectedBoxShadowS: '2',
      dfNodeSelectedBoxShadowColor: '#4ea9ff',

      dfInputBackgroundColor: '#ffffff',
      dfInputBorderSize: '2',
      dfInputBorderColor: '#000000',
      dfInputBorderRadius: '50',
      dfInputLeft: '-27',
      dfInputHeight: '20',
      dfInputWidth: '20',

      dfInputHoverBackgroundColor: '#ffffff',
      dfInputHoverBorderSize: '2',
      dfInputHoverBorderColor: '#000000',
      dfInputHoverBorderRadius: '50',

      dfOutputBackgroundColor: '#ffffff',
      dfOutputBorderSize: '2',
      dfOutputBorderColor: '#000000',
      dfOutputBorderRadius: '50',
      dfOutputRight: '-3',
      dfOutputHeight: '20',
      dfOutputWidth: '20',

      dfOutputHoverBackgroundColor: '#ffffff',
      dfOutputHoverBorderSize: '2',
      dfOutputHoverBorderColor: '#000000',
      dfOutputHoverBorderRadius: '50',

      dfLineWidth: '5',
      dfLineColor: '#4682b4',
      dfLineHoverColor: '#4682b4',
      dfLineSelectedColor: '#43b993',

      dfRerouteBorderWidth: '2',
      dfRerouteBorderColor: '#000000',
      dfRerouteBackgroundColor: '#ffffff',

      dfRerouteHoverBorderWidth: '2',
      dfRerouteHoverBorderColor: '#000000',
      dfRerouteHoverBackgroundColor: '#ffffff',

      dfDeleteDisplay: 'block',
      dfDeleteColor: '#ffffff',
      dfDeleteBackgroundColor: '#000000',
      dfDeleteBorderSize: '2',
      dfDeleteBorderColor: '#ffffff',
      dfDeleteBorderRadius: '50',
      dfDeleteTop: '-15',

      dfDeleteHoverColor: '#000000',
      dfDeleteHoverBackgroundColor: '#ffffff',
      dfDeleteHoverBorderSize: '2',
      dfDeleteHoverBorderColor: '#000000',
      dfDeleteHoverBorderRadius: '50',

    }
  },
  mounted() {
    const id = document.getElementById("drawflow");
    this.editor = new Drawflow(id);
    this.editor.reroute = true;

    this.editor.start();
    const importJSON = {"drawflow":{"Home":{"data":{"1":{"id":1,"name":"demo-drawflow-1","data":{"name":""},"class":"demo-drawflow-1","html":"<div>Demo</div>","typenode":false,"inputs":{},"outputs":{"output_1":{"connections":[{"node":"3","output":"input_1"},{"node":"2","output":"input_1"},{"node":"4","output":"input_1","points":[{"pos_x":497.53125,"pos_y":525}]}]}},"pos_x":150,"pos_y":300},"2":{"id":2,"name":"demo-drawflow-2","data":{},"class":"demo-drawflow-1","html":"<div>Demo</div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"1","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]},"output_2":{"connections":[]}},"pos_x":600,"pos_y":300},"3":{"id":3,"name":"demo-drawflow-3","data":{},"class":"demo-drawflow-1","html":"<div>Demo</div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"1","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":700,"pos_y":150},"4":{"id":4,"name":"demo-drawflow-4","data":{},"class":"demo-drawflow-1","html":"<div>Demo</div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"1","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":800,"pos_y":600}}}}};
    this.editor.import(importJSON);
    /*const html = `<div>Demo<br><input type="text" df-name></div>`;
    const html2 = `<div>Demo</div>`;


    this.editor.addNode('demo-drawflow-1', 0, 1, 150, 300, 'demo-drawflow-1', { "name": '' }, html);
    this.editor.addNode('demo-drawflow-2', 1, 2, 600, 300, 'demo-drawflow-1', {}, html2);

    this.editor.addNode('demo-drawflow-3', 1, 1, 700, 150, 'demo-drawflow-1', {}, html2);
    this.editor.addNode('demo-drawflow-4', 1, 1, 800, 600, 'demo-drawflow-1', {}, html2);*/

  },
  methods: {
    exportDf() {
      console.log(JSON.stringify(this.editor.export()));
    },
    exportTheme(){
      this.dialogVisible = true;
      this.code = document.getElementById("drawflow-theme").innerHTML;
    },
    dialogVisibleOpenend() {
      this.precode = `:root {
  --dfBackgroundColor: ${this.dfBackgroundColor};
  --dfBackgroundSize: ${this.dfBackgroundSize}px;
  --dfBackgroundImage: ${this.dfBackgroundImage};

  --dfNodeType: ${this.dfNodeType};
  --dfNodeTypeFloat: ${this.dfNodeTypeFloat};
  --dfNodeBackgroundColor: ${this.dfNodeBackgroundColor};
  --dfNodeTextColor: ${this.dfNodeTextColor};
  --dfNodeBorderSize: ${this.dfNodeBorderSize}px;
  --dfNodeBorderColor: ${this.dfNodeBorderColor};
  --dfNodeBorderRadius: ${this.dfNodeBorderRadius}px;
  --dfNodeMinHeight: ${this.dfNodeMinHeight}px;
  --dfNodeMinWidth: ${this.dfNodeMinWidth}px;
  --dfNodePaddingTop: ${this.dfNodePaddingTop}px;
  --dfNodePaddingBottom: ${this.dfNodePaddingBottom}px;
  --dfNodeBoxShadowHL: ${this.dfNodeBoxShadowHL}px;
  --dfNodeBoxShadowVL: ${this.dfNodeBoxShadowVL}px;
  --dfNodeBoxShadowBR: ${this.dfNodeBoxShadowBR}px;
  --dfNodeBoxShadowS: ${this.dfNodeBoxShadowS}px;
  --dfNodeBoxShadowColor: ${this.dfNodeBoxShadowColor};

  --dfNodeHoverBackgroundColor: ${this.dfNodeHoverBackgroundColor};
  --dfNodeHoverTextColor: ${this.dfNodeHoverTextColor};
  --dfNodeHoverBorderSize: ${this.dfNodeHoverBorderSize}px;
  --dfNodeHoverBorderColor: ${this.dfNodeHoverBorderColor};
  --dfNodeHoverBorderRadius: ${this.dfNodeHoverBorderRadius}px;

  --dfNodeHoverBoxShadowHL: ${this.dfNodeHoverBoxShadowHL}px;
  --dfNodeHoverBoxShadowVL: ${this.dfNodeHoverBoxShadowVL}px;
  --dfNodeHoverBoxShadowBR: ${this.dfNodeHoverBoxShadowBR}px;
  --dfNodeHoverBoxShadowS: ${this.dfNodeHoverBoxShadowS}px;
  --dfNodeHoverBoxShadowColor: ${this.dfNodeHoverBoxShadowColor};

  --dfNodeSelectedBackgroundColor: ${this.dfNodeSelectedBackgroundColor};
  --dfNodeSelectedTextColor: ${this.dfNodeSelectedTextColor};
  --dfNodeSelectedBorderSize: ${this.dfNodeSelectedBorderSize}px;
  --dfNodeSelectedBorderColor: ${this.dfNodeSelectedBorderColor};
  --dfNodeSelectedBorderRadius: ${this.dfNodeSelectedBorderRadius}px;

  --dfNodeSelectedBoxShadowHL: ${this.dfNodeSelectedBoxShadowHL}px;
  --dfNodeSelectedBoxShadowVL: ${this.dfNodeSelectedBoxShadowVL}px;
  --dfNodeSelectedBoxShadowBR: ${this.dfNodeSelectedBoxShadowBR}px;
  --dfNodeSelectedBoxShadowS: ${this.dfNodeSelectedBoxShadowS}px;
  --dfNodeSelectedBoxShadowColor: ${this.dfNodeSelectedBoxShadowColor};

  --dfInputBackgroundColor: ${this.dfInputBackgroundColor};
  --dfInputBorderSize: ${this.dfInputBorderSize}px;
  --dfInputBorderColor: ${this.dfInputBorderColor};
  --dfInputBorderRadius: ${this.dfInputBorderRadius}px;
  --dfInputLeft: ${this.dfInputLeft}px;
  --dfInputHeight: ${this.dfInputHeight}px;
  --dfInputWidth: ${this.dfInputWidth}px;

  --dfInputHoverBackgroundColor: ${this.dfInputHoverBackgroundColor};
  --dfInputHoverBorderSize: ${this.dfInputHoverBorderSize}px;
  --dfInputHoverBorderColor: ${this.dfInputHoverBorderColor};
  --dfInputHoverBorderRadius: ${this.dfInputHoverBorderRadius}px;

  --dfOutputBackgroundColor: ${this.dfOutputBackgroundColor};
  --dfOutputBorderSize: ${this.dfOutputBorderSize}px;
  --dfOutputBorderColor: ${this.dfOutputBorderColor};
  --dfOutputBorderRadius: ${this.dfOutputBorderRadius}px;
  --dfOutputRight: ${this.dfOutputRight}px;
  --dfOutputHeight: ${this.dfOutputHeight}px;
  --dfOutputWidth: ${this.dfOutputWidth}px;

  --dfOutputHoverBackgroundColor: ${this.dfOutputHoverBackgroundColor};
  --dfOutputHoverBorderSize: ${this.dfOutputHoverBorderSize}px;
  --dfOutputHoverBorderColor: ${this.dfOutputHoverBorderColor};
  --dfOutputHoverBorderRadius: ${this.dfOutputHoverBorderRadius}px;

  --dfLineWidth: ${this.dfLineWidth}px;
  --dfLineColor: ${this.dfLineColor};
  --dfLineHoverColor: ${this.dfLineHoverColor};
  --dfLineSelectedColor: ${this.dfLineSelectedColor};

  --dfRerouteBorderWidth: ${this.dfRerouteBorderWidth}px;
  --dfRerouteBorderColor: ${this.dfRerouteBorderColor};
  --dfRerouteBackgroundColor: ${this.dfRerouteBackgroundColor};

  --dfRerouteHoverBorderWidth: ${this.dfRerouteHoverBorderWidth}px;
  --dfRerouteHoverBorderColor: ${this.dfRerouteHoverBorderColor};
  --dfRerouteHoverBackgroundColor: ${this.dfRerouteHoverBackgroundColor};

  --dfDeleteDisplay: ${this.dfDeleteDisplay};
  --dfDeleteColor: ${this.dfDeleteColor};
  --dfDeleteBackgroundColor: ${this.dfDeleteBackgroundColor};
  --dfDeleteBorderSize: ${this.dfDeleteBorderSize}px;
  --dfDeleteBorderColor: ${this.dfDeleteBorderColor};
  --dfDeleteBorderRadius: ${this.dfDeleteBorderRadius}px;
  --dfDeleteTop: ${this.dfDeleteTop}px;

  --dfDeleteHoverColor: ${this.dfDeleteHoverColor};
  --dfDeleteHoverBackgroundColor: ${this.dfDeleteHoverBackgroundColor};
  --dfDeleteHoverBorderSize: ${this.dfDeleteHoverBorderSize}px;
  --dfDeleteHoverBorderColor: ${this.dfDeleteHoverBorderColor};
  --dfDeleteHoverBorderRadius: ${this.dfDeleteHoverBorderRadius}px;

}
`
      this.code = this.precode + this.code;

      document.getElementById("code").textContent =  this.code;
      Prism.highlightAll()
    },
    copied() {
      this.$message({
       message: '👏 Copied! 🎉',
       type: 'success'
      });
    },
    updateNodes(){
      this.editor.updateConnectionNodes("node-1");
      this.editor.updateConnectionNodes("node-2");
      this.editor.updateConnectionNodes("node-3");
      this.editor.updateConnectionNodes("node-4");
    },
    ChangeBackground(){
      let styleBackdround = 'none';
      if(this.SelectBackground !== 'color') {
        if(this.SelectBackground === 'grid') {
          styleBackdround = 'linear-gradient(to right, '+this.dfBackgroundImageColor+' 1px, transparent 1px), linear-gradient(to bottom, '+this.dfBackgroundImageColor+' 1px, transparent 1px)';

        } else {
          // dots
          styleBackdround = 'radial-gradient('+this.dfBackgroundImageColor+' 1px, transparent 1px)';
        }
        document.documentElement.style.setProperty('--dfBackgroundImage', styleBackdround);

      } else {
        document.documentElement.style.setProperty('--dfBackgroundSize', '0px');
        this.dfBackgroundSize = '0';
        document.documentElement.style.setProperty('--dfBackgroundImage', 'none');
      }
      this.dfBackgroundImage = styleBackdround;
    },
    ChangeNode(){
      if(this.SelectNode == "flex") {
        this.dfNodeType = 'flex';
        this.dfNodeTypeFloat = 'none';
        document.documentElement.style.setProperty('--dfNodeType', 'flex');
        document.documentElement.style.setProperty('--dfNodeTypeFloat', 'none');
      } else {
        this.dfNodeType = 'block';
        this.dfNodeTypeFloat = 'right';
        document.documentElement.style.setProperty('--dfNodeType', 'block');
        document.documentElement.style.setProperty('--dfNodeTypeFloat', 'right');
      }
      this.updateNodes();
    },
    ChangeDelete(){
      if(this.SelectDelete == "block") {
        this.dfDeleteDisplay = 'block';
        document.documentElement.style.setProperty('--dfDeleteDisplay', 'block');
      } else {
        this.dfDeleteDisplay = 'none';
        document.documentElement.style.setProperty('--dfDeleteDisplay', 'none');
      }
    },
    dfBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfBackgroundColor', value);
      this.dfBackgroundColor = value;
      this.ChangeBackground();
    },
    dfBackgroundSizeChange(value) {
      document.documentElement.style.setProperty('--dfBackgroundSize', value+'px');
      this.dfBackgroundSize = value;
      this.ChangeBackground();
    },
    dfBackgroundImageColorChange(value) {
      //document.documentElement.style.setProperty('--dfBackgroundImageColor', value);
      this.dfBackgroundImageColor = value;
      this.ChangeBackground();
    },
    dfNodeBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeBackgroundColor', value);
      this.dfNodeBackgroundColor = value;
    },
    dfNodeTextColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeTextColor', value);
      this.dfNodeTextColor = value;
    },
    dfNodeBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfNodeBorderSize', value+'px');
      this.dfNodeBorderSize = value;
      this.updateNodes();
    },
    dfNodeBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeBorderColor', value);
      this.dfNodeBorderColor = value;
    },
    dfNodeBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfNodeBorderRadius', value+'px');
      this.dfNodeBorderRadius = value;
      this.updateNodes();
    },
    dfNodeMinHeightChange(value) {
      document.documentElement.style.setProperty('--dfNodeMinHeight', value+'px');
      this.dfNodeMinHeight = value;
      this.updateNodes();
    },
    dfNodeMinWidthChange(value) {
      document.documentElement.style.setProperty('--dfNodeMinWidth', value+'px');
      this.dfNodeMinWidth = value;
      this.updateNodes();
    },
    dfNodePaddingTopChange(value) {
      document.documentElement.style.setProperty('--dfNodePaddingTop', value+'px');
      this.dfNodePaddingTop = value;
      this.updateNodes();
    },
    dfNodePaddingBottomChange(value) {
      document.documentElement.style.setProperty('--dfNodePaddingBottom', value+'px');
      this.dfNodePaddingBottom = value;
      this.updateNodes();
    },

    dfNodeBoxShadowHLChange(value) {
      document.documentElement.style.setProperty('--dfNodeBoxShadowHL', value+'px');
      this.dfNodeBoxShadowHL = value;
    },
    dfNodeBoxShadowVLChange(value) {
      document.documentElement.style.setProperty('--dfNodeBoxShadowVL', value+'px');
      this.dfNodeBoxShadowVL = value;
    },
    dfNodeBoxShadowBRChange(value) {
      document.documentElement.style.setProperty('--dfNodeBoxShadowBR', value+'px');
      this.dfNodeBoxShadowBR = value;
    },
    dfNodeBoxShadowSChange(value) {
      document.documentElement.style.setProperty('--dfNodeBoxShadowS', value+'px');
      this.dfNodeBoxShadowS = value;
    },
    dfNodeBoxShadowColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeBoxShadowColor', value);
      this.dfNodeBoxShadowColor = value;
    },

    dfNodeHoverBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBackgroundColor', value);
      this.dfNodeHoverBackgroundColor = value;
    },
    dfNodeHoverTextColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverTextColor', value);
      this.dfNodeHoverTextColor = value;
    },
    dfNodeHoverBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBorderSize', value+'px');
      this.dfNodeHoverBorderSize = value;
      this.updateNodes();
    },
    dfNodeHoverBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBorderColor', value);
      this.dfNodeHoverBorderColor = value;
    },
    dfNodeHoverBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBorderRadius', value+'px');
      this.dfNodeHoverBorderRadius = value;
      this.updateNodes();
    },


    dfNodeHoverBoxShadowHLChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBoxShadowHL', value+'px');
      this.dfNodeHoverBoxShadowHL = value;
    },
    dfNodeHoverBoxShadowVLChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBoxShadowVL', value+'px');
      this.dfNodeHoverBoxShadowVL = value;
    },
    dfNodeHoverBoxShadowBRChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBoxShadowBR', value+'px');
      this.dfNodeHoverBoxShadowBR = value;
    },
    dfNodeHoverBoxShadowSChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBoxShadowS', value+'px');
      this.dfNodeHoverBoxShadowS = value;
    },
    dfNodeHoverBoxShadowColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeHoverBoxShadowColor', value);
      this.dfNodeHoverBoxShadowColor = value;
    },

    dfNodeSelectedBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBackgroundColor', value);
      this.dfNodeSelectedBackgroundColor = value;
    },
    dfNodeSelectedTextColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedTextColor', value);
      this.dfNodeSelectedTextColor = value;
    },
    dfNodeSelectedBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBorderSize', value+'px');
      this.dfNodeSelectedBorderSize = value;
      this.updateNodes();
    },
    dfNodeSelectedBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBorderColor', value);
      this.dfNodeSelectedBorderColor = value;
    },
    dfNodeSelectedBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBorderRadius', value+'px');
      this.dfNodeSelectedBorderRadius = value;
      this.updateNodes();
    },

    dfNodeSelectedBoxShadowHLChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBoxShadowHL', value+'px');
      this.dfNodeSelectedBoxShadowHL = value;
    },
    dfNodeSelectedBoxShadowVLChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBoxShadowVL', value+'px');
      this.dfNodeSelectedBoxShadowVL = value;
    },
    dfNodeSelectedBoxShadowBRChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBoxShadowBR', value+'px');
      this.dfNodeSelectedBoxShadowBR = value;
    },
    dfNodeSelectedBoxShadowSChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBoxShadowS', value+'px');
      this.dfNodeSelectedBoxShadowS = value;
    },
    dfNodeSelectedBoxShadowColorChange(value) {
      document.documentElement.style.setProperty('--dfNodeSelectedBoxShadowColor', value);
      this.dfNodeSelectedBoxShadowColor = value;
    },
    /* INPUT */
    dfInputBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfInputBackgroundColor', value);
      this.dfInputBackgroundColor = value;
    },
    dfInputBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfInputBorderSize', value+'px');
      this.dfInputBorderSize = value;
      this.updateNodes();
    },
    dfInputBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfInputBorderColor', value);
      this.dfInputBorderColor = value;
    },
    dfInputBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfInputBorderRadius', value+'px');
      this.dfInputBorderRadius = value;
      this.updateNodes();
    },
    dfInputLeftChange(value) {
      document.documentElement.style.setProperty('--dfInputLeft', value+'px');
      this.dfInputLeft = value;
      this.updateNodes();
    },
    dfInputHeightChange(value) {
      document.documentElement.style.setProperty('--dfInputHeight', value+'px');
      this.dfInputHeight = value;
      this.updateNodes();
    },
    dfInputWidthChange(value) {
      document.documentElement.style.setProperty('--dfInputWidth', value+'px');
      this.dfInputWidth = value;
      this.updateNodes();
    },
    dfInputHoverBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfInputHoverBackgroundColor', value);
      this.dfInputHoverBackgroundColor = value;
    },
    dfInputHoverBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfInputHoverBorderSize', value+'px');
      this.dfInputHoverBorderSize = value;
      this.updateNodes();
    },
    dfInputHoverBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfInputHoverBorderColor', value);
      this.dfInputHoverBorderColor = value;
    },
    dfInputHoverBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfInputHoverBorderRadius', value+'px');
      this.dfInputHoverBorderRadius = value;
      this.updateNodes();
    },

    /* OUTPUT */
    dfOutputBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfOutputBackgroundColor', value);
      this.dfOutputBackgroundColor = value;
    },
    dfOutputBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfOutputBorderSize', value+'px');
      this.dfOutputBorderSize = value;
      this.updateNodes();
    },
    dfOutputBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfOutputBorderColor', value);
      this.dfOutputBorderColor = value;
    },
    dfOutputBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfOutputBorderRadius', value+'px');
      this.dfOutputBorderRadius = value;
      this.updateNodes();
    },
    dfOutputRightChange(value) {
      document.documentElement.style.setProperty('--dfOutputRight', value+'px');
      this.dfOutputRight = value;
      this.updateNodes();
    },
    dfOutputHeightChange(value) {
      document.documentElement.style.setProperty('--dfOutputHeight', value+'px');
      this.dfOutputHeight = value;
      this.updateNodes();
    },
    dfOutputWidthChange(value) {
      document.documentElement.style.setProperty('--dfOutputWidth', value+'px');
      this.dfOutputWidth = value;
      this.updateNodes();
    },
    dfOutputHoverBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfOutputHoverBackgroundColor', value);
      this.dfOutputHoverBackgroundColor = value;
    },
    dfOutputHoverBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfOutputHoverBorderSize', value+'px');
      this.dfOutputHoverBorderSize = value;
      this.updateNodes();
    },
    dfOutputHoverBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfOutputHoverBorderColor', value);
      this.dfOutputHoverBorderColor = value;
    },
    dfOutputHoverBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfOutputHoverBorderRadius', value+'px');
      this.dfOutputHoverBorderRadius = value;
      this.updateNodes();
    },
    /* LINE */
    dfLineWidthChange(value) {
      document.documentElement.style.setProperty('--dfLineWidth', value+'px');
      this.dfLineWidth = value;

    },
    dfLineColorChange(value) {
      document.documentElement.style.setProperty('--dfLineColor', value);
      this.dfLineColor = value;
    },
    dfLineHoverColorChange(value) {
      document.documentElement.style.setProperty('--dfLineHoverColor', value);
      this.dfLineHoverColor = value;
    },
    dfLineSelectedColorChange(value) {
      document.documentElement.style.setProperty('--dfLineSelectedColor', value);
      this.dfLineSelectedColor = value;
    },

    /* REROUTE */
    dfRerouteBorderWidthChange(value) {
      document.documentElement.style.setProperty('--dfRerouteBorderWidth', value+'px');
      this.dfRerouteBorderWidth = value;

    },
    dfRerouteBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfRerouteBorderColor', value);
      this.dfRerouteBorderColor = value;
    },
    dfRerouteBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfRerouteBackgroundColor', value);
      this.dfRerouteBackgroundColor = value;
    },

    dfRerouteHoverBorderWidthChange(value) {
      document.documentElement.style.setProperty('--dfRerouteHoverBorderWidth', value+'px');
      this.dfRerouteHoverBorderWidth = value;
    },
    dfRerouteHoverBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfRerouteHoverBorderColor', value);
      this.dfRerouteHoverBorderColor = value;
    },
    dfRerouteHoverBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfRerouteHoverBackgroundColor', value);
      this.dfRerouteHoverBackgroundColor = value;
    },
    /* DELETE */
    dfDeleteColorChange(value) {
      document.documentElement.style.setProperty('--dfDeleteColor', value);
      this.dfDeleteColor = value;
    },
    dfDeleteBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfDeleteBackgroundColor', value);
      this.dfDeleteBackgroundColor = value;
    },
    dfDeleteBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfDeleteBorderSize', value+'px');
      this.dfDeleteBorderSize = value;
    },
    dfDeleteBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfDeleteBorderColor', value);
      this.dfDeleteBorderColor = value;
    },
    dfDeleteBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfDeleteBorderRadius', value+'px');
      this.dfDeleteBorderRadius = value;
    },
    dfDeleteTopChange(value) {
      document.documentElement.style.setProperty('--dfDeleteTop', value+'px');
      this.dfDeleteTop = value;
    },

    dfDeleteHoverColorChange(value) {
      document.documentElement.style.setProperty('--dfDeleteHoverColor', value);
      this.dfDeleteHoverColor = value;
    },
    dfDeleteHoverBackgroundColorChange(value) {
      document.documentElement.style.setProperty('--dfDeleteHoverBackgroundColor', value);
      this.dfDeleteHoverBackgroundColor = value;
    },
    dfDeleteHoverBorderSizeChange(value) {
      document.documentElement.style.setProperty('--dfDeleteHoverBorderSize', value+'px');
      this.dfDeleteHoverBorderSize = value;
    },
    dfDeleteHoverBorderColorChange(value) {
      document.documentElement.style.setProperty('--dfDeleteHoverBorderColor', value);
      this.dfDeleteHoverBorderColor = value;
    },
    dfDeleteHoverBorderRadiusChange(value) {
      document.documentElement.style.setProperty('--dfDeleteHoverBorderRadius', value+'px');
      this.dfDeleteHoverBorderRadius = value;
    },


  }
});
