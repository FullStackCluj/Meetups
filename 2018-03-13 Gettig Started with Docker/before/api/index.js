const app = require('./src/server');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Demo Api started on port ${process.env.PORT || 3000}`);
});