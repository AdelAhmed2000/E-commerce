// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { SingelCard } from "../../component/common/SingelCard";
// import { useDispatch, useSelector } from "react-redux";

// export const SingelItem = () => {
//   const id = useParams();
//   const dispatch = useDispatch();
//   const allProducts = useSelector((state) => state.products);

//   const [product, setProduct] = useState({});
//   const [loading, setloading] = useState(true);
//   useEffect(() => {
//     async function displayItemDetalis(id) {
//       try {
//         const res = await axios(`https://dummyjson.com/products/${id.id}`);
//         setProduct(res.data);
//       } catch (error) {
//         console.log(error.message);
//       } finally {
//         setloading(false);
//       }
//     }
//     displayItemDetalis(id);
//   }, [id]);
//   if (loading) {
//     return <span className="loader"></span>;
//   }
//   return <SingelCard dispatch={dispatch} data={product} cat={id} />;
// };


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingelCard } from "../../component/common/SingelCard";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../api/data/firebase"; // تأكد من أن هذا الملف يحتوي على التهيئة الصحيحة لفايربيز
import { doc, getDoc } from "firebase/firestore"; // استيراد دوال Firebase المناسبة

export const SingelItem = () => {
  const { id } = useParams(); // الحصول على الـ id من الـ URL
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function displayItemDetails() {
      try {
        const productRef = doc(db, "products", id); // الوصول إلى مستند المنتج في فايربيز باستخدام الـ id
        const docSnap = await getDoc(productRef); // جلب المستند

        if (docSnap.exists()) {
          // إذا كانت الوثيقة موجودة في Firestore
          setProduct({ id: docSnap.id, ...docSnap.data() }); // إضافة الـ id مع بيانات المنتج
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching product:", error.message);
      } finally {
        setLoading(false);
      }
    }
    displayItemDetails();
  }, [id]);

  if (loading) {
    return <span className="loader"></span>; // عرض المحمل أثناء جلب البيانات
  }

  return <SingelCard dispatch={dispatch} data={product} cat={id} />;
};
