const express=require("express");
const router=express.Router();
const functions=require("firebase-admin");
const firestore=functions.firestore();

// crud operation

// add computer

router.post("/add",(req,res)=>{
    console.log("hello",req.body);
    firestore.collection("computer").add(req.body).then(()=>{
        res.send({status:200,data:req.body})
    })
    .catch(err=>{
        res.send({status:500,msg:"data error",error:err})
    })
})

// list computer

router.get("/list",(req,res)=>{
    firestore.collection("computer").get().then(async(docs)=>{
        let data=[];
        docs.forEach(doc=>{
            let obj=doc.data();
            obj['key']=doc.id;
            data.push(obj);
        })
        await Promise.all(data);
        res.send({status:200,msg:"data successfully listed",data:data})
    })
    .catch(err=>{
        res.send({status:500,msg:"data error",error:err})
    })
})

// one list 

router.get("/:id",(req,res)=>{
    firestore.collection("computer").doc(req.params.id).get().then((doc)=>{
        res.send({status:200,msg:"data successfully list",data:doc.data()})
    }) 
    .catch(err=>{
        res.send({status:500,msg:"data error",error:err})
    })
})

// update computer

router.put("/update/:id",(req,res)=>{
    firestore.collection("computer").doc(req.params.id).update(req.body).then((doc)=>{
        res.send({status:200,msg:"data updated"})
    })
    .catch(err=>{
        res.send({status:500,msg:"data error",error:err})
    })
})

// delete computer

router.delete("/delete/:id",(req,res)=>{
    firestore.collection("computer").doc(req.params.id).delete(req.body).then((doc)=>{
        res.send({status:200,msg:"data successfully deleted"})
    })
    .catch(err=>{
        res.send({status:500,msg:"data error",error:err})
    })
})

module.exports=router;