// app/api/submitform.ts
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: "email" | "phone";
  message: string;
  rating: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData: FormData = req.body;

    // Basic validation
    if (!formData.name || !formData.message) {
      return res.status(400).json({ error: "Name and message are required" });
    }

    // Check if required contact method is provided
    if (formData.contactMethod === "email" && !formData.email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (formData.contactMethod === "phone" && !formData.phone) {
      return res.status(400).json({ error: "Phone is required" });
    }

    // Add to Firebase
    const docRef = await addDoc(collection(db, "contacts"), {
      ...formData,
      createdAt: new Date().toISOString()
    });

    return res.status(200).json({ 
      success: true, 
      message: "Form submitted successfully",
      id: docRef.id 
    });

  } catch (error) {
    console.error("Error submitting form:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Failed to submit form" 
    });
  }
}