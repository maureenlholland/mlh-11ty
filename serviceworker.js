addEventListener("fetch", e => {
  const request = e.request;
  e.respondWith(
    fetch(request).then(resp => {
      return resp;
    })
  );
});
