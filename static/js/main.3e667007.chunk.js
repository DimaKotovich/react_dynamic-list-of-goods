(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var r=e(5),a=e.n(r),A=e(2),c=e(6),s=e(1),u=e.n(s),o=e(3),i=(e(12),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function g(){return p.apply(this,arguments)}function p(){return(p=Object(A.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=function(){var t=Object(A.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.slice(0,5));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(A.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=(e(13),e(0)),m=function(t){var n=t.state;return Object(l.jsx)("ul",{className:"list",children:n.map((function(t){return Object(l.jsx)("li",{style:{color:"".concat(t.color)},className:"list__item",children:t.name},t.id)}))})},h=function(){var t=Object(o.useState)([]),n=Object(c.a)(t,2),e=n[0],r=n[1],a=function(){var t=Object(A.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,g();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(A.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,f();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(A.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,d();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"app__block",children:[0!==e.length&&Object(l.jsx)(m,{state:e}),Object(l.jsxs)("div",{className:"app__buttons",children:[Object(l.jsx)("button",{type:"button",onClick:a,className:"app__button",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"All",className:"app__button--image"})}),Object(l.jsx)("button",{type:"button",onClick:s,className:"app__button",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVRoge1XTU8TURQ9r9N2mH7QBmhQESIg7Ah+bNzojzDib5C4lX/hv3CHK5duWLpyIYkRXRAJCQFJCRSw7XSYd1306828NzPvtYnRZM4GbkPvPefcjxmAFClSpEiR4j8G6//yZpeKzMFbABsApsdNTAQQCERyTACgjAEi6v3sf28YE3AG4tsdy956t85+A0B2oKRL/tXIhBWkqPehGFOPKQmEhwKHhCMETRNh0+IuAXgdEICu82akDV1WCUKIJPUSibFC5EuVgMSxMSggxbpjoilops9JFBBD2tTViLEJ5TMWLXCIFKAuqO+q5jJKrup0VcwvCeBk5rLK1S8fdnG8dxLb0erCFB6+eKx5laI5SAJ8PvaJQ6ftxZJHL5fPKZBvlC4qBAiuGo5NP6HXvNHhLwjofjLq/oQEkCJZ8uyKIj132IHFpyuozk8FRAMAy2bgE8Xn1xAkCeChto5y4rx2Z5C4WCvDmSkputgzK8LVuFgcb7kDA+UjnjgO+K4/SMzyWYGo+ZgkCZQFBJbY/MTduP7gcwC4Om2gdd4EsxjyFQd2tZDoqskVjBRg0kYxoddyIeJg50cgtqsF3HmyhPLCtHF+tSCFgLCr0pgo4n6ypBPqXjTx8+NXzD1bRWXlVvd7Gp2N4iQJ4DycrPuXurPreQRnugTLzsKys+CeD7fRQueqPaxGwMmnfThzU7DsnMaYRNeTO0Cyq8o4osBErYzl549CywdcHdZxtPMd5PNuHc/H1eEZysuzWp2NimUBgyVOvgAmu1G4O4XK6iwu9o4HRd1GCwUasV7/O1EC4tpmUlB0NePkEQQLHY34qxe1K5IAHVfVF4HAiQAwWSQHmkfnAfqZSSf0MNN/WPY5SAKCS2x+4uqfD+C3PZSWashVisjkM+hcttH4doT2r8uh97ks8rcriqMhGhi9GzFLHLGgMQUCMSdc75/iev8UcSg/WABZliQg+aQKnJQCYl6ndU4cj6UNgDGU1udhL9YSX6e7z4h4DgoB+m1Uzapzr/tvqnvSgN/2wN0bMIvBKtrI1SZh359FpmgHjDKvFxxvqQNhV01OXGaygMLaApy16P3hXO8g6FxBSYDO67RqVpNn1+yVRK4nuy4iuAOGBZIKmrqq6nQShCvE60Rs5u+4KsQhgZqoywI43hPRZmJBpaAgCdP9MQVj2JYEuBP+ltW0AKINAma0XB1xbMZAnTFse83M1nhpUqRIkSJFin8EfwAuzv2h3uAwNAAAAABJRU5ErkJggg==",alt:"Five",className:"app__button--image"})}),Object(l.jsx)("button",{type:"button",onClick:i,className:"app__button",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Red",className:"app__button--image"})})]})]})})};a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e667007.chunk.js.map