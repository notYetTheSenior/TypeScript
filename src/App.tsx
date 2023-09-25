import { Product } from "./components/product";
import { useProducts } from "./hooks/products";
import {Loader} from "./components/loader";
import {ErrorMessage} from "./components/errorMessage";
import {Modal} from "./components/modal";
import {CreateProduct} from "./components/createProduct";
import {useState} from "react";

function App() {

  const {loading, error, products} = useProducts();
    const [modal, setModal] = useState(true);

    return(
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      { products.map(product => <Product product={product} key={product.id} />) }
        {modal && <Modal title="Create new product">
            <CreateProduct onCreate={() => setModal(false)}/>
        </Modal>}
    </div>
  );
}

export default App;
