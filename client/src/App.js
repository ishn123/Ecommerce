import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Collection from "./pages/collection/Collection";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import Payments from "./components/payments/Payments";
import SearchBar from "./components/search-bar/SearchBar";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import AppHeader from "./components/Appheader/Appheader";
import { getToken } from "./helpers";
import Profile from "./components/Profile/Profile";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={getToken() ? <Home /> : <Navigate to="/signin" />}
          />
          <Route
            path="/profile"
            element={getToken() ? <Profile /> : <Navigate to="/signin" />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/category/:categoryId?"
            element={getToken() ? <Collection /> : <Navigate to="/signin" />}
          />
          <Route
            path="/search/?"
            element={getToken() ? <SearchBar /> : <Navigate to="/signin" />}
          />
          <Route
            path="/products/:productId"
            element={getToken() ? <ProductDetail /> : <Navigate to="/signin" />}
          />
          <Route
            path="/payments/:status"
            element={getToken() ? <Payments /> : <Navigate to="/signin" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
