
//const heading = React.createElement('h1',{id:"first", xyz:"abc"},'Hello World From React');

const parent = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},
[React.createElement
('h1',{},'Hi i am  h1 tag'),
React.createElement('h2',{},'Hi I am h2 Tag')
]
));
const root    = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);