var c=(t,s,n,r)=>{n.statusCode===200&&n.status(500),t instanceof Error&&JSON.stringify(t)==="{}"?n.json({error:{name:t.name,message:t.message}}):n.json({error:t});};var g=(t,s)=>(n,r,e,i)=>{let o=typeof t=="string"?t:t?.[e.statusCode],a=(typeof s=="string"?s:s?.[e.statusCode])??(n instanceof Error?n.message:"Unknown error");e.send(`
    <script>
      alert("${a}");
      ${o?`window.location.replace("${o}")`:"history.back()"}
    </script>
  `);};export{c as api,g as www};