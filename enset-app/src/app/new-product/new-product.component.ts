import {Product} from "../model/product.model";
import {Validators} from "@angular/forms";

name : this.fb.control('', [Validators.required]),
  price : this.fb.control(0,),
  checked : this.fb.control(false),
});
}

saveProduct() {
  let product:Product=this.productForm.value;
  this.productService.saveProduct(product).subscribe({
    next : data => {
      alert(JSON.stringify(data));
    }, error :err => {
      console.log(err);
    }
  });
}

