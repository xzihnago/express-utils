export const www: MiddlewareError<
  [
    redirect?: string | Partial<Record<number, string>>,
    messages?: string | Partial<Record<number, string>>,
  ]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = (redirect, messages) => (error, _req, res, _next) => {
  const url =
    typeof redirect === "string" ? redirect : redirect?.[res.statusCode];

  const message =
    (typeof messages === "string" ? messages : messages?.[res.statusCode]) ??
    (error instanceof Error ? error.message : "Unknown error");

  res.send(`
    <script>
      alert("${message}");
      ${url ? `window.location.replace("${url}")` : "history.back()"}
    </script>
  `);
};
