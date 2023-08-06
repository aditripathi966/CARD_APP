const express = require("express");
const router = express.Router();

const db = [
    {
        image: "https://images.unsplash.com/photo-1625797226467-a87561e3d77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading: "Morning View",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://images.unsplash.com/photo-1625884422538-4edf3a9987d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
        heading: "Man Standing",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
    {
        image: "https://images.unsplash.com/photo-1612908630755-31679b2bc781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading: "Mountains",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus natus unde cumque nobis, perferendis aspernatur minus ut at eos asperiores.",
    },
];
 const users=[
    {
        image:"https://images.unsplash.com/photo-1612908630755-31679b2bc781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        heading:"Userrr Data",
        para:"Published 1 day Free to use under the Unsplash License",
    }
 ]

router.get("/", (req, res) => {
    res.render("index", { title: "Homepage", posts: db });
});

router.get("/users", (req, res) => {
    res.render("users", { title: "users", users: users });
});

router.get("/about", (req, res) => {
    res.render("about", { title: "about", posts: db });
});
router.get("/products", (req, res) => {
    res.render("Products", { title: "Product", posts: db });
});
router.get("/create-product", (req, res) => {
    res.render("create-product", { title: "Product | create",  });
});
router.post("/create-product", (req, res) => {
    // res.json(req.query)
    //   res.json(req.body)
    // res.send("on the page");
    db.push(req.body)
    res.redirect("/products")
});
router.get("/delete-product/:index", (req, res) => {
    db.splice(req.params.index,1);
    res.redirect("/products");
});
router.get("/update-product/:index", (req, res) => {
          res.render("update-product",{
            title:"update product",
            post:db[req.params.index],
            index:req.params.index,
          });
});
router.post("/update-product/:index", (req, res) => {
          db[req.params.index]=req.body;
          res.redirect("/products");
    });



module.exports = router;
