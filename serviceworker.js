addEventListener('fetch', (e) => {
    const request = e.request;
    console.log(request);
    e.respondWith(
        fetch(request)
            .then((resp) => {
                return resp
            })
    );
});