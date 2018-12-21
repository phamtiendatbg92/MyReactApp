

class ProductObject{
    constructor(no, productName, branch, subBranch, price, imgUrl){
        this.no = no;
        this.productName = productName;
        this.branch = branch;
        this.subBranch = subBranch;
        this.price = price;
        this.imgUrl = imgUrl;
    }
    
    
    setData(formData){
        this.productName = formData.productName;
        this.branch = formData.branch;
        this.subBranch = formData.subBranch;
        this.price = formData.price;
    }
}


export default ProductObject;