import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../api/data/firebase";
import toast from "react-hot-toast";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (category) => {
    try {
      // إعداد المجموعة
      const productsCollection = collection(db, "products");
      let q;

      // إذا تم تمرير كاتجوري، أضف شرط where
      if (category) {
        q = query(productsCollection, where("category", "==", category));
      } else {
        // إذا لم يتم تمرير كاتجوري، اجلب كل البيانات
        q = query(productsCollection);
      }

      // تنفيذ الكويري
      const querySnapshot = await getDocs(q);

      // التحقق من النتيجة
      if (querySnapshot.empty) {
        console.warn("No documents found for the given query.");
      }

      // تحويل البيانات إلى مصفوفة
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched products:", products); // للمراجعة
      return products;
    } catch (err) {
      console.error("Error fetching products:", err);
      throw err;
    }
  }
);

const productsSlice = createSlice({
  initialState: {
    products: [],
  },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    // builder.addCase(fetchProducts2.fulfilled, (state, action) => {
    //   state.products2 = action.payload;
    // });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
