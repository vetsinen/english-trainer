(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"sentences",(function(){return r})),n.d(t,"translations",(function(){return o}));var r=["i have two cups","a cat sits on the table","A father and son went fishing","A small child met his new teacher","Love was an easy game","A kindergarten teacher was observing her classroom","Wayne was returning home from a business trip","A young boy was playing with a ball in the street","Sir I am a member of the Parliament"],o=["у меня есть две чашки","кот сидит на столе","Отец с сыном отправились на рыбалку","Маленький мальчик встретился с новой учительницей","Любовь была легкой игрой","Воспитательница в детском саду наблюдала за своей группой детей","Уэйн возвращался из командировки","Маленький мальчик играл с мячом на улице","Сэр, Я член парламента"]},291:function(e,t,n){"use strict";n.r(t);var r=n(26),base=(n(154),n(9),n(24),n(290)),o={name:"exercices",data:function(){return{score:0,sentence:"I have two cups",translation:"У меня есть два стакана",correctSequence:[],randomSequence:["I","two","cups","have"],collectedSequence:[],expectedWordIndex:null}},methods:{wordClicked:function(e){console.log(this.randomSequence[e]),this.correctSequence[this.expectedWordIndex]===this.randomSequence[e]&&(this.collectedSequence[this.expectedWordIndex]=this.correctSequence[this.expectedWordIndex],this.randomSequence.splice(e,1),this.expectedWordIndex++,console.log(this.collectedSequence),this.expectedWordIndex===this.correctSequence.length&&(this.score++,this.$bvToast.show("winner-toast"),this.nextSentence()))},prepareLists:function(){this.correctSequence=this.sentence.toLowerCase().split(" "),this.randomSequence=this.shuffleArray(this.correctSequence),this.collectedSequence=[],this.expectedWordIndex=0,console.log(this.correctSequence),console.log(this.randomSequence)},nextSentence:function(){var e=Math.floor(Math.random()*base.sentences.length);console.log(e),this.translation=base.translations[e],this.sentence=base.sentences[e],this.prepareLists()},shuffleArray:function(e){for(var t=Object(r.a)(e),i=t.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),o=t[i];t[i]=t[n],t[n]=o}return t}},created:function(){console.log(base.sentences),this.nextSentence()}},c=n(63),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("p",{staticClass:"row"},[e._v("Your score is "),n("b",[e._v(e._s(e.score))])]),e._v(" "),n("p",{staticClass:"row"},[e._v("Please, provide a translation for sentence:")]),e._v(" "),n("p",[n("b",[e._v(e._s(e.translation))])]),e._v(" "),n("div",{staticClass:"row words-control"},e._l(e.randomSequence,(function(t,r){return n("div",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.wordClicked(r)}}},[e._v(e._s(t))]),e._v("\n       \n    ")],1)})),0),e._v(" "),n("br"),e._v(" "),n("p",[e._v("Guessed in current sentence "),n("b",[e._v(e._s(e.expectedWordIndex))])]),e._v(" "),n("div",{staticClass:"row"},e._l(e.collectedSequence,(function(t){return n("div",{staticClass:"collected words"},[n("b-button",{attrs:{variant:"success"}},[e._v(e._s(t))]),e._v("\n       \n    ")],1)})),0),e._v(" "),n("b-toast",{attrs:{id:"winner-toast",variant:"warning",solid:""},scopedSlots:e._u([{key:"toast-title",fn:function(){return[n("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[n("b-img",{staticClass:"mr-2",attrs:{blank:"","blank-color":"#ff5555",width:"12",height:"12"}}),e._v(" "),n("strong",{staticClass:"mr-auto"},[e._v("Congatulation")])],1)]},proxy:!0}])},[e._v("\n    You gathered word, now your score is "+e._s(e.score)+"\n  ")])],1)}),[],!1,null,"6ba744f0",null);t.default=component.exports},292:function(e,t,n){"use strict";n.r(t);var r={},o=n(63),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"text-center"},[e._v("Here you can train your english")]),e._v(" "),n("exercices")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Exercices:n(291).default})}}]);