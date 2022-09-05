// Loading MFs can be done directly - no need for explicit declaration or anything;
// after all, these are valid modules already and we know their URLs
// if we don't know their URLs we can always request the URLs from a respective discovery service

console.log("Loading MFs");

await Promise.all([import("./mf1/index.js"), import("./mf2/index.js"), import("./mf3/index.js")]);

console.log("All MFs loaded!");
