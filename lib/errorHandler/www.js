var a=n=>(r,o,t,i)=>{let e;n&&typeof n=="object"&&(e=n[t.statusCode]),e??="back";let s=r instanceof Error?r.message:"Unknown error";t.send(`
      <script>
        alert("${s}");

        if ("${e}" === "back") {
          history.back();
        } else {
          window.location.replace("${e}");
        }
      </script>
    `);};export{a as www};