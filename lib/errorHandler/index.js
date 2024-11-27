var a=(e,s,t,n)=>{t.statusCode===200&&t.status(500),JSON.stringify(e)==="{}"&&e instanceof Error?t.json({error:e.message}):t.json({error:e});};var f=e=>(s,t,n,i)=>{let o;e&&typeof e=="object"&&(o=e[n.statusCode]),o??="back";let r=s instanceof Error?s.message:"Unknown error";n.send(`
      <script>
        alert("${r}");

        if ("${o}" === "back") {
          history.back();
        } else {
          window.location.replace("${o}");
        }
      </script>
    `);};export{a as api,f as www};