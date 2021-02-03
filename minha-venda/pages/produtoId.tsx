import { GetStaticPaths, GetStaticProps } from 'next'
import React from'react'
import Stripe from 'stripe'
import stripeConfig from '../coinfig/stripe'




const Produto: React.FC =()=>{
    return(
        <h1>Produto</h1>
    )

}

export const getStaticPaths:GetStaticPaths = async ()=>{

    const stripe = new Stripe(stripeConfig.secretKey,{
        apiVersion:'2020-08-27',
    })

     const skus = await stripe.skus.list()
     

  /*    const sku = await stripe.skus.create({
        attributes: {size: 'Medium', gender: 'Unisex'},
        price: 1500,
        currency: 'brl',
        inventory: {type: 'finite', quantity: 500},
        product: 'prod_IsCOoQNTJtsp5O',
      }); */

     

     const paths =skus.data.map((sku)=>({
         params:{
             skuId:sku.id
         },

     }))

  
     

    return{
        paths,
        fallback:false,
    };
};

    export const getStaticProps: GetStaticProps = async ({params})=>{
        return{
            props:{}
        }
    }

    

    


export default Produto