exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
    body: `
      <html>
        <head>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <h1>Hello World :)</h1>
          <p>${new Date().toISOString()}</p>
        </body>
      </html>
    `,
  };
};
