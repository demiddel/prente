const atomicDir = (file) => {
  const filePath = file.split("/");
  return filePath.slice(filePath.length - 3, filePath.length - 2)[0];
};

export { atomicDir };
