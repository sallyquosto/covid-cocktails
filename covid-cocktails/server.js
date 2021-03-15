const port = process.env.PORT || 3000;

applicationCache.eventListeners(port, () => console.log(`listening on poty: ${port}.`));