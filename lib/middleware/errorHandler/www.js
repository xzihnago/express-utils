var c=(t,r)=>(o,i,n,a)=>{let s=typeof t=="string"?t:t?.[n.statusCode],e=(typeof r=="string"?r:r?.[n.statusCode])??(o instanceof Error?o.message:"Unknown error");n.send(`
    <script>
      alert("${e}");
      ${s?`window.location.replace("${s}")`:"history.back()"}
    </script>
  `);};export{c as www};