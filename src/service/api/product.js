import httpsRequre from "../https";



export const getProduct = async (params) => {
  const data = await httpsRequre.get("/cigar", {
    params,
  });
  return data;
};

export const addProduct = async (item) => {
  await httpsRequre.post("/cigar", {});
};

export const deleteProduct = async (id) => {
  await httpsRequre.delete("/cigar", id);
};

export const editProduct = async (id, item) => { };
