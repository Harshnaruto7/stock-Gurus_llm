import { db } from "@/firebase/firebase"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

// Define the shape of the incoming request body
interface FormData {
  name: string;
  email: string;
  phone?: string; // phone is optional
  message: string;
  contactMethod: "email" | "phone";
  rating: number;
}

// API Route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Destructure form data from the request body
      const { name, email, phone, message, contactMethod, rating }: FormData = req.body;

      // Ensure required fields are not empty
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Add data to Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        message,
        contactMethod,
        rating,
      });

      // Return a success response
      return res.status(201).json({ message: "Form submitted successfully!", id: docRef.id });
    } catch (error) {
      // Return an error response
      console.error("Error adding document: ", error);
      return res.status(500).json({ error: "Error saving data" });
    }
  } else {
    // Handle other HTTP methods (e.g., GET)
    return res.setHeader("Allow", ["POST"]).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
