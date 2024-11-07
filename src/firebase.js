// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Gantilah dengan konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyBgPTjKA0T66DtZS4UhN9-hEkFMp6dbLuk",
  authDomain: "testimonials-64b92.firebaseapp.com",
  projectId: "testimonials-64b92",
  storageBucket: "testimonials-64b92.firebasestorage.app",
  messagingSenderId: "213535884750",
  appId: "1:213535884750:web:0a1bd8c7268dd392ae579f",
  measurementId: "G-FVZ3P7C9MT"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi untuk menambahkan testimonial ke Firestore
const addTestimonial = async (name, comment, rating) => {
  try {
    await addDoc(collection(db, "testimonials"), {
      name,
      comment,
      rating,
      created_at: new Date()
    });
  } catch (e) {
    console.error("Error adding testimonial: ", e);
  }
};

// Fungsi untuk mengambil semua testimonial dari Firestore
const getTestimonials = async () => {
  const querySnapshot = await getDocs(collection(db, "testimonials"));
  const testimonials = [];
  querySnapshot.forEach((doc) => {
    testimonials.push(doc.data());
  });
  return testimonials;
};



export { addTestimonial, getTestimonials };
