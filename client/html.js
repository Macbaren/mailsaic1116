const Html = ({
  body
}) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="theme-color" content="#023D69">
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <div id="root" class="body-bg">${body}</div>
      <script type="text/javascript" src="/js/bundle.js?v=COMMITHASH"></script>
    </body>
  </html>
`
}

export default Html
