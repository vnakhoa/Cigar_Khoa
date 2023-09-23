import httpsRequre from "../https";


export const getProduct = async (params) => {
  console.log(params)
  
  if (typeof(params) == 'object') {
    const {data} = await httpsRequre.get(`/cigar`,{
      params: {...params, price: null}
    } );
    console.log(data, '11111111')
    if(params.price != null){
      const newData = data.filter((item) => item.price <= params.price);
      console.log(newData)
      return {data: newData};
    }
    else{
      console.log('oo')
      return {data};
    }
  }
  else {
    if(params){
      let data = await httpsRequre.get(`/cigar/${params}`);
      if(!Array.isArray(data)){
        const preData = data.data
        data ={data: [preData]}
      }
      console.log(data, '22222222')
      return data;
    }
    else if(params == undefined){
      const data = await httpsRequre.get("/cigar", params);
      console.log(data, '333333333')
      return data;

    }
  }
};

export const addProduct = async (item) => {
  console.log(item)
  await httpsRequre.post("/cigar/add", item);
};

export const deleteProduct = async (id) => {
  console.log(id)
  await httpsRequre.delete(`/cigar/${id}`);

};

export const editProduct = async (id, item) => {
  console.log(id, item)
  await httpsRequre.put(`/cigar/${id}`, item)
};
