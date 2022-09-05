if ("serviceWorker" in navigator) {
  const url = document.currentScript.dataset.entry;
  
  navigator.serviceWorker.register("sw.js").then((reg) => {
    const load = () => {
      if (reg.active) {
        import(url);
      }
    };

    if (reg.installing) {
      reg.installing.addEventListener("statechange", load);
    } else {
      load();
    }
  });
}
