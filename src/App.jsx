import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notFound/NotFound";
import { Shop } from "./pages/shop/Shop";
import { Winter } from "./pages/winter/Winter";
import { SportSacces } from "./pages/SportSacces/SportSacces";
import { Shoes } from "./pages/shoes/Shoes";
import { Sale } from "./pages/hot_deals/Sale";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { SingelItem } from "./pages/singelProduct/SingelItem";
import { Toaster } from "react-hot-toast";
import { Favorite } from "./pages/favorite/Favorite";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import { Summer } from "./pages/summer/Summer";
import { MobileAccessories } from "./pages/MobileAccessories/MobileAccessories";
import { WomensBags } from "./pages/WomensBags/WomensBags";
import { SignUp } from "./pages/LoginSettings/SignUp";
import { Login } from "./pages/LoginSettings/Login";
import { ForgetPassword } from "./pages/LoginSettings/ForgetPassword";
import { Require } from "./context/Require";
import { CartItemsAll } from "./component/cart/CartItemsAll";
import { Trending } from "./component/Trending/Trending";
import { ProductList } from "./admin/product/ProductList";
import { CreateProduct } from "./admin/CreateProduct";

function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Require>
              <Home />
            </Require>
          ),
        },
        { path: "/summer", element: <Summer /> },
        { path: "/shop", element: <Shop /> },
        { path: "/winter", element: <Winter /> },
        { path: "/WomensBags", element: <WomensBags /> },
        { path: "/MobileAccessories", element: <MobileAccessories /> },
        { path: "/SportSacces", element: <SportSacces /> },
        { path: "/shoes", element: <Shoes /> },
        { path: "/sale", element: <Sale /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/favorite", element: <Favorite /> },
        { path: "/login", element: <Login /> },
        { path: "/signUp", element: <SignUp /> },
        { path: "/forgotPassword", element: <ForgetPassword /> },
        { path: "/SingelItem/:category/:id", element: <SingelItem /> },
        { path: "/cartItemsAll", element: <CartItemsAll /> },
        { path: "/trending", element: <Trending /> },
        { path: "*", element: <NotFound /> },
        { path: "/admin/products", element: <ProductList /> },
        { path: "/admin/products/creatrProduct", element: <CreateProduct /> },
      ],
    },
  ]);
  return (
    <main>
      <div className="toaster">
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <ScrollToTop />
      <RouterProvider router={routing} />
    </main>
  );
}

export default App;
