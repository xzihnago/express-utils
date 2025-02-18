var f=(t,n,e,s)=>{e.statusCode===200&&e.status(500),t instanceof Error&&JSON.stringify(t)==="{}"?e.json({error:{name:t.name,message:t.message}}):e.json({error:t});};var l=(t,n)=>(e,s,o,a)=>{let r;t&&typeof t=="object"&&(r=t[o.statusCode]);let i;n?typeof n=="string"?i=n:i=n[o.statusCode]:e instanceof Error&&(i=e.message),i??="Unknown error",o.send(`
      <script>
        alert("${i}");
        ${r?`window.location.replace("${r}")`:"history.back()"}
      </script>
    `);};export{f as api,l as www};