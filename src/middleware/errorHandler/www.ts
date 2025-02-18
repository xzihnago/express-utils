export const www: MiddlewareError<
  [
    redirect?: string | Partial<Record<number, string>>,
    messages?: string | Partial<Record<number, string>>,
  ]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = (redirect, messages) => (error, _req, res, _next) => {
  let url: string | undefined;
  if (redirect && typeof redirect === "object") {
    url = redirect[res.statusCode];
  }

  let message: string | undefined;
  if (messages) {
    if (typeof messages === "string") {
      message = messages;
    } else {
      message = messages[res.statusCode];
    }
  } else if (error instanceof Error) {
    message = error.message;
  }
  message ??= "Unknown error";

  res.send(`
      <script>
        alert("${message}");
        ${url ? `window.location.replace("${url}")` : "history.back()"}
      </script>
    `);
};
