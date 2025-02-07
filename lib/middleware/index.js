import g from'jsonwebtoken';var p=Object.defineProperty;var d=(e,r)=>{for(var o in r)p(e,o,{get:r[o],enumerable:true});};var w=(e,r,o)=>{let t=new Date().toISOString(),n=e.ip??e.socket.remoteAddress??"unknown";console.log(`\x1B[0;36m[${t}] \x1B[0;35m[${n}] \x1B[0;33m${e.method} \x1B[0m${e.path}`),o();};var m=(e,r,o)=>{r.ok=t=>{r.json({data:t});},o();};var i={};d(i,{api:()=>u,www:()=>x});var u=(e,r,o,t)=>{o.statusCode===200&&o.status(500),JSON.stringify(e)==="{}"&&e instanceof Error?o.json({error:e.message}):o.json({error:e});};var x=e=>(r,o,t,n)=>{let s;e&&typeof e=="object"&&(s=e[t.statusCode]),s??="back";let a=r instanceof Error?r.message:"Unknown error";t.send(`
      <script>
        alert("${a}");

        if ("${s}" === "back") {
          history.back();
        } else {
          window.location.replace("${s}");
        }
      </script>
    `);};var c={};d(c,{jwt:()=>k,local:()=>f});var f=(e,r,o)=>{let t=e.ip??e.socket.remoteAddress;if(t!=="::1"&&t!=="localhost")throw r.status(401),new Error("Unauthorized");o();};var k=(e,r)=>(o,t,n)=>{let s=o.headers.authorization?.split(" ")[1];if(!s&&r&&(s=o.signedCookies?.[r]??o.cookies?.[r]),!s)throw t.status(401),new Error("No authorization header or cookie");try{let a=g.verify(s,e);o.jwt={token:s,decoded:a};}catch(a){throw t.status(401),a}n();};var l={};d(l,{zod:()=>h});var h=e=>(r,o,t)=>{try{r.body=e.parse(r.body);}catch(n){throw o.status(422),n}t();};export{c as authentication,i as errorHandler,m as responseHandler,w as routeLog,l as validateSchema};