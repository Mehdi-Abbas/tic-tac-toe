(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var s=a(1),l=a.n(s),n=a(5),i=a.n(n),o=(a(16),a(4)),r=a.n(o),c=a(6),u=a(7),h=a(8),_=a(9),v=a(2),d=a(11),g=a(10),w=(a(18),a(0)),C=function(t){Object(d.a)(a,t);var e=Object(g.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).state={turn:"X",value_1:"",value_2:"",value_3:"",value_4:"",value_5:"",value_6:"",value_7:"",value_8:"",value_9:"",gameEnd:!1,winner:"",draw:!1,color_1:"white",color_2:"white",color_3:"white",color_4:"white",color_5:"white",color_6:"white",color_7:"white",color_8:"white",color_9:"white",winningColor:"#adedaf"},t.handleClick=t.handleClick.bind(Object(v.a)(t)),t}return Object(_.a)(a,[{key:"handleClick",value:function(){var t=Object(u.a)(r.a.mark((function t(e){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.name,s=e.prevValue,""===this.state[a]&&this.setState({turn:"X"===this.state.turn?"O":"X"}),t.t0=!this.state.gameEnd&&""===this.state[a],!t.t0){t.next=6;break}return t.next=6,this.setState(Object(c.a)({},a,this.state.turn));case 6:this.state.value_1===s&&this.state.value_1===this.state.value_4&&this.state.value_4===this.state.value_7?(console.log("game end 1"),this.setState({gameEnd:!0,winner:s,color_1:this.state.winningColor,color_4:this.state.winningColor,color_7:this.state.winningColor})):this.state.value_2===s&&this.state.value_2===this.state.value_5&&this.state.value_5===this.state.value_8?(console.log("game end 2"),this.setState({gameEnd:!0,winner:s,color_2:this.state.winningColor,color_5:this.state.winningColor,color_8:this.state.winningColor})):this.state.value_3===s&&this.state.value_3===this.state.value_6&&this.state.value_6===this.state.value_9?(console.log("game end 3"),this.setState({gameEnd:!0,winner:s,color_3:this.state.winningColor,color_6:this.state.winningColor,color_9:this.state.winningColor})):this.state.value_1===s&&this.state.value_1===this.state.value_2&&this.state.value_2===this.state.value_3?(console.log("game end 4"),this.setState({gameEnd:!0,winner:s,color_1:this.state.winningColor,color_2:this.state.winningColor,color_3:this.state.winningColor})):this.state.value_4===s&&this.state.value_4===this.state.value_5&&this.state.value_5===this.state.value_6?(console.log("game end 5"),this.setState({gameEnd:!0,winner:s,color_4:this.state.winningColor,color_5:this.state.winningColor,color_6:this.state.winningColor})):this.state.value_7===s&&this.state.value_7===this.state.value_8&&this.state.value_8===this.state.value_9?(console.log("game end 6"),this.setState({gameEnd:!0,winner:s,color_7:this.state.winningColor,color_8:this.state.winningColor,color_9:this.state.winningColor})):this.state.value_1===s&&this.state.value_1===this.state.value_5&&this.state.value_5===this.state.value_9?(console.log("game end 7"),this.setState({gameEnd:!0,winner:s,color_1:this.state.winningColor,color_5:this.state.winningColor,color_9:this.state.winningColor})):this.state.value_7===s&&this.state.value_7===this.state.value_5&&this.state.value_5===this.state.value_3?(console.log("game end 8"),this.setState({gameEnd:!0,winner:s,color_7:this.state.winningColor,color_5:this.state.winningColor,color_3:this.state.winningColor})):""!==this.state.value_1&&""!==this.state.value_2&&""!==this.state.value_3&&""!==this.state.value_4&&""!==this.state.value_5&&""!==this.state.value_6&&""!==this.state.value_7&&""!==this.state.value_8&&""!==this.state.value_9&&this.setState({gameEnd:!0,draw:!0});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"result",value:function(){if(this.state.gameEnd){if("X"===this.state.winner)return"X win!";if("O"===this.state.winner)return"O win!";if(this.state.draw)return"It's a tie!"}}},{key:"board",value:function(t){var e=this;return Object(w.jsx)("div",{className:"board",children:Object(w.jsxs)("table",{style:this.styles,children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{style:{color:"X"===this.state.value_1?"red":"blue",backgroundColor:this.state.color_1},onClick:function(){return e.handleClick({name:"value_1",prevValue:e.state.turn})},children:this.state.value_1}),Object(w.jsx)("td",{className:"vert",style:{color:"X"===this.state.value_2?"red":"blue",backgroundColor:this.state.color_2},onClick:function(){return e.handleClick({name:"value_2",prevValue:e.state.turn})},children:this.state.value_2}),Object(w.jsx)("td",{style:{color:"X"===this.state.value_3?"red":"blue",backgroundColor:this.state.color_3},onClick:function(){return e.handleClick({name:"value_3",prevValue:e.state.turn})},children:this.state.value_3})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"hori",style:{color:"X"===this.state.value_4?"red":"blue",backgroundColor:this.state.color_4},onClick:function(){return e.handleClick({name:"value_4",prevValue:e.state.turn})},children:this.state.value_4}),Object(w.jsx)("td",{className:"vert hori",style:{color:"X"===this.state.value_5?"red":"blue",backgroundColor:this.state.color_5},onClick:function(){return e.handleClick({name:"value_5",prevValue:e.state.turn})},children:this.state.value_5}),Object(w.jsx)("td",{className:"hori",style:{color:"X"===this.state.value_6?"red":"blue",backgroundColor:this.state.color_6},onClick:function(){return e.handleClick({name:"value_6",prevValue:e.state.turn})},children:this.state.value_6})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{style:{color:"X"===this.state.value_7?"red":"blue",backgroundColor:this.state.color_7},onClick:function(){return e.handleClick({name:"value_7",prevValue:e.state.turn})},children:this.state.value_7}),Object(w.jsx)("td",{className:"vert",style:{color:"X"===this.state.value_8?"red":"blue",backgroundColor:this.state.color_8},onClick:function(){return e.handleClick({name:"value_8",prevValue:e.state.turn})},children:this.state.value_8}),Object(w.jsx)("td",{style:{color:"X"===this.state.value_9?"red":"blue",backgroundColor:this.state.color_9},onClick:function(){return e.handleClick({name:"value_9",prevValue:e.state.turn})},children:this.state.value_9})]})]})})}},{key:"render",value:function(){var t=this;return Object(w.jsx)("div",{className:"main",children:Object(w.jsxs)("div",{className:"tictac",children:[Object(w.jsx)("div",{className:"header",children:"Tic Tac Toe"}),this.board(),Object(w.jsxs)("h1",{style:{display:this.state.gameEnd?"none":"block"},children:["Turn: ",this.state.turn]}),Object(w.jsx)("h1",{children:this.result()}),Object(w.jsx)("button",{onClick:function(){t.setState({turn:"X",value_1:"",value_2:"",value_3:"",value_4:"",value_5:"",value_6:"",value_7:"",value_8:"",value_9:"",gameEnd:!1,winner:"",draw:!1,color_1:"white",color_2:"white",color_3:"white",color_4:"white",color_5:"white",color_6:"white",color_7:"white",color_8:"white",color_9:"white",winningColor:"#adedaf"})},children:"Restart Game"})]})})}}]),a}(l.a.Component);a(20);var b=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(C,{})})},j=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,s=e.getFID,l=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),s(t),l(t),n(t),i(t)}))};i.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(b,{})}),document.getElementById("root")),j()}},[[21,1,2]]]);
//# sourceMappingURL=main.99fb04d6.chunk.js.map