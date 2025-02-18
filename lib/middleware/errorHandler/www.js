var d=(r,e)=>(o,s,n,a)=>{let i;r&&typeof r=="object"&&(i=r[n.statusCode]);let t;e?typeof e=="string"?t=e:t=e[n.statusCode]:o instanceof Error&&(t=o.message),t??="Unknown error",n.send(`
      <script>
        alert("${t}");
        ${i?`window.location.replace("${i}")`:"history.back()"}
      </script>
    `);};export{d as www};