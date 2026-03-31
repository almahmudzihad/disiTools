# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
bg-linear-to-t from-sky-500 to-indigo-500

bg-linear-to-t from-sky-500 to-indigo-500
bg-linear-to-r from-[#4f39fb] to-[#9514fa]


section titel & discr
<div className='py-20 text-center'>
     <h1 className='text-3xl font-bold py-4'>Get Started in 3 Steps</h1>
      <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>


  </div>



  import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);

    

    toast.success("Item deleted!");
  };

  return (
    <div className=" p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-2xl p-5">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between border rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="text-3xl font-bold">${item.price}/month</div>

                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn rounded-full btn-error"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-red-500 text-white text-2xl  rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
