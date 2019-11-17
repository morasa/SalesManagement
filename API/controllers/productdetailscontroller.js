import dbmodels from "../models";
const {detailsmodel}  = dbmodels;


export const addproduct = (req,res)=>{
    console.log("creating");
    console.log(req.body);
  
   const {product_code,product_name,product_category,product_manufacture,product_status} = req.body;
    
      detailsmodel.create({product_code,product_name,product_category,product_manufacture,product_status}).then(productsOBJ => res.status(201)
                                                .send({
                                                     success:true,
                                                     message:"product added successfully",
                                                     productsOBJ
                                                }))
                                                .catch(err => res.status(400)
                                                        .send({
                                                            success:false,
                                                         message:"Unable to add product",
                                                         err
                                                        }));

};
export const getproducts = (req,res) => {
    console.log("get");
    detailsmodel.find({}).then(productslist => res.status(200)
                                .send({
                                   
                                    productslist
                                }))
                                .catch(err => res.status(400)
                                .send({
                                    success:false,
                                    err
                                }))
}