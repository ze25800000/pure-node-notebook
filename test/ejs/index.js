const ejs = require('ejs');
const path = require('path');
const html = `
  <% if(world.match('jjj')){%>
  <%- world %>
  <% }%>
  <%= nihao%>
  <%- include('test')%>
`;

const world = `xxxx`;
const f1 = ejs.compile(html, {
  filename: path.resolve(__filename),
  compileDebug: true,
});
const finalStr = f1({
  world: '123123123',
  nihao: '<script>alert(123)</script>'
});
console.log(finalStr)
