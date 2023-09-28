import {useProducts} from "../hooks/products";
import {useContext} from "react";
import {ModalContext} from "../context/modalContext";
import {IProduct} from "../models";
import {Loader} from "../components/loader";
import {ErrorMessage} from "../components/errorMessage";
import {Product} from "../components/product";
import {Modal} from "../components/modal";
import {CreateProduct} from "../components/createProduct";

export const ProductsPage = () => {
    const {loading, error, products, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    };

    return(
        <div>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            { products.map(product => <Product product={product} key={product.id} />) }
            {
                modal && <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={createHandler}/>
              </Modal>
            }

            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-800 text-white text-2xl px-4 py-2"
                onClick={open}
            >
                +
            </button>
        </div>
    );
}