export default {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "jest",
    },
    binary: {
      version: "7.0.24",
      skipMD5: true,
    },
    autoStart: false,
  },
};