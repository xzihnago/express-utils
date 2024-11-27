import x from'jsonwebtoken';var w=Object.defineProperty;var d=(e,r)=>{for(var o in r)w(e,o,{get:r[o],enumerable:!0});};var p=(e,r,o)=>{let t=new Date().toISOString(),n=e.ip??e.socket.remoteAddress??"unknown";console.log(`\x1B[0;36m[${t}] \x1B[0;35m[${n}] \x1B[0;33m${e.method} \x1B[0m${e.path}`),o();};var m=(e,r,o)=>{r.ok=t=>{r.json({data:t});},o();};var i={};d(i,{api:()=>u,www:()=>f});var u=(e,r,o,t)=>{o.statusCode===200&&o.status(500),JSON.stringify(e)==="{}"&&e instanceof Error?o.json({error:e.message}):o.json({error:e});};var f=e=>(r,o,t,n)=>{let s;e&&typeof e=="object"&&(s=e[t.statusCode]),s??="back";let a=r instanceof Error?r.message:"Unknown error";t.send(`
      <script>
        alert("${a}");

        if ("${s}" === "back") {
          history.back();
        } else {
          window.location.replace("${s}");
        }
      </script>
    `);};var c={};d(c,{jwt:()=>k,local:()=>g});var g=(e,r,o)=>{let t=e.ip??e.socket.remoteAddress;if(t!=="::1"&&t!=="localhost")throw r.status(401),new Error("Unauthorized");o();};var k=(e,r)=>(o,t,n)=>{let s=o.headers.authorization?.split(" ")[1];if(!s&&r&&(s=o.signedCookies?.[r]??o.cookies?.[r]),!s)throw t.status(401),new Error("No authorization header or cookie");try{let a=x.verify(s,e);o.jwt={token:s,decoded:a};}catch(a){throw t.status(401),a}n();};var l={};d(l,{zod:()=>h});var h=e=>(r,o,t)=>{try{r.body=e.parse(r.body);}catch(n){throw o.status(422),n}t();};var b={routeLog:p,responseHandler:m,errorHandler:i,authentication:c,validateSchema:l},N=b;export{c as authentication,N as default,i as errorHandler,m as responseHandler,p as routeLog,l as validateSchema};