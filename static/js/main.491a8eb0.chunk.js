(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var a=i(8),c=i.n(a),n=(i(17),i(11)),s=i(2),r=(i(18),i(1)),l=(i(19),i(20),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(6),b=i(3),j=i(12),h=i(9),u=i.n(h),g=["value"];var O=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,n=e.placeholder,o=void 0===n?"Enter ".concat(c):n,d=e.required,m=void 0!==d&&d,h=e.onChange,O=void 0===h?function(){}:h,p=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),v=Object(s.a)(p,1)[0],f=Object(r.useState)(""),x=Object(s.a)(f,2),M=x[0],N=x[1],w=Object(r.useState)(!1),U=Object(s.a)(w,2),I=U[0],T=U[1],y=function(e){N((function(){return"description"===t?"":m&&!e?"".concat(c," is required"):e.trim()?"":"".concat(c," cannot be just spaces")}))};return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:v,children:c}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:v,name:t,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":M&&I}),placeholder:o,value:i,onChange:function(e){var t=e.target,i=t.value,a=Object(j.a)(t,g);y(i),O(Object(b.a)(Object(b.a)({},e),{},{currentTarget:Object(b.a)(Object(b.a)({},a),{},{value:i})}))},onBlur:function(){T(!0),y(i)}})}),I&&M&&Object(l.jsx)("p",{className:"help is-danger",children:M})]})},p=function(e){var t=e.onAdd,i=Object(r.useState)(!0),a=Object(s.a)(i,2),c=a[0],n=a[1],o=0,d=Object(r.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),j=Object(s.a)(d,2),h=j[0],u=j[1],g=h.title,p=h.description,v=h.imgUrl,f=h.imdbUrl,x=h.imdbId,M=function(e){var t=e.target,i=t.name,a=t.value;u((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(m.a)({},i,a))}));var c="title"===i?a.trim():g.trim(),s="imgUrl"===i?a.trim():v.trim(),r="imdbUrl"===i?a.trim():f.trim(),l="imdbId"===i?a.trim():x.trim();n(!c||!s||!r||!l)};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:g,description:p,imgUrl:v,imdbUrl:f,imdbId:x}),u({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),n(!0),o+=1},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(O,{required:!0,name:"title",label:"Title",value:g,onChange:M}),Object(l.jsx)(O,{name:"description",label:"Description",value:p,onChange:M}),Object(l.jsx)(O,{required:!0,name:"imgUrl",label:"Image URL",value:v,onChange:M}),Object(l.jsx)(O,{required:!0,name:"imdbUrl",label:"Imdb URL",value:f,onChange:M}),Object(l.jsx)(O,{required:!0,name:"imdbId",label:"Imdb ID",value:x,onChange:M}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:c,children:"Add"})})})]},o)},v=i(10),f=function(){var e=Object(r.useState)(v),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(p,{onAdd:function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};c.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.491a8eb0.chunk.js.map