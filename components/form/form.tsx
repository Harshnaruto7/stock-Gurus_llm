"use client";
import React, { useState } from "react";
import { db } from "../../lib/firebase"; // Adjust this import according to your file structure
import { collection, addDoc } from "firebase/firestore"; // Import necessary Firestore functions

interface FormData {
    name: string;
    email: string;
    phone: string;
    contactMethod: "email" | "phone";
    message: string;
    rating: number;
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        contactMethod: "email",
        email: "",
        phone: "",
        message: "",
        rating: 2,
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
    const totalSteps = 3;

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRatingChange = (value: number) => {
        setFormData((prevData) => ({ ...prevData, rating: value }));
    };

    const handleNextStep = () => {
        // Validate current step before proceeding
        if (currentStep === 1 && !formData.name) {
            setErrorMessage("Please enter your name");
            return;
        }
        if (currentStep === 2) {
            if (formData.contactMethod === "email" && !formData.email) {
                setErrorMessage("Please enter your email");
                return;
            }
            if (formData.contactMethod === "phone" && !formData.phone) {
                setErrorMessage("Please enter your phone number");
                return;
            }
        }
        
        setErrorMessage("");
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
        setErrorMessage("");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Final validation before confirmation
        if (!formData.name || (!formData.email && !formData.phone) || !formData.message) {
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setIsConfirmed(true);
        setErrorMessage("");
    };

    const confirmSubmission = async () => {
        setIsLoading(true);
        setSubmitStatus('idle');
        
        try {
            // Add document to Firestore
            const docRef = await addDoc(collection(db, "submissions"), formData);
            console.log("Document written with ID: ", docRef.id);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: "",
                contactMethod: "email",
                email: "",
                phone: "",
                message: "",
                rating: 2,
            });
            setCurrentStep(1);
            setIsConfirmed(false);
        } catch (error) {
            console.error("Error adding document: ", error);
            setSubmitStatus('error');
            setErrorMessage("There was an error submitting the form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const editForm = () => {
        setIsConfirmed(false);
        setCurrentStep(1);
        setErrorMessage("");
    };

    const progressValue = isConfirmed ? 100 : (currentStep - 1) * (100 / totalSteps);

    return (
        <div className="container mx-auto p-6 max-w-md">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                        style={{ width: `${progressValue}%` }}
                    ></div>
                </div>
            </div>

            {submitStatus === 'success' && (
                <div className="alert alert-success mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Form submitted successfully!</span>
                </div>
            )}

            {errorMessage && (
                <div className="alert alert-error mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{errorMessage}</span>
                </div>
            )}

            {!isConfirmed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {currentStep === 1 && (
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <div className="mt-4">
                                <button type="button" className="btn btn-primary w-full" onClick={handleNextStep}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Method</span>
                            </label>
                            <div className="flex gap-4 mb-4">
                                <label className="cursor-pointer label">
                                    <input
                                        type="radio"
                                        name="contactMethod"
                                        value="email"
                                        className="radio"
                                        checked={formData.contactMethod === "email"}
                                        onChange={handleChange}
                                    />
                                    <span className="label-text ml-2">Email</span>
                                </label>
                                <label className="cursor-pointer label">
                                    <input
                                        type="radio"
                                        name="contactMethod"
                                        value="phone"
                                        className="radio"
                                        checked={formData.contactMethod === "phone"}
                                        onChange={handleChange}
                                    />
                                    <span className="label-text ml-2">Phone</span>
                                </label>
                            </div>

                            {formData.contactMethod === "email" ? (
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    className="input input-bordered w-full"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    className="input input-bordered w-full"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            )}
                            <div className="flex justify-between mt-4">
                                <button type="button" className="btn btn-outline" onClick={handlePrevStep}>
                                    Back
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="Type your message here"
                                className="textarea textarea-bordered h-24 w-full"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            
                            <label className="label mt-4">
                                <span className="label-text">Rating</span>
                            </label>
                            <div className="rating rating-lg">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name="rating"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked={formData.rating === star}
                                        onChange={() => handleRatingChange(star)}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-between mt-4">
                                <button type="button" className="btn btn-outline" onClick={handlePrevStep}>
                                    Back
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Review
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            ) : (
                <div className="bg-base-200 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Review Your Submission</h2>
                    <div className="space-y-2">
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Contact Method:</strong> {formData.contactMethod}</p>
                        {formData.contactMethod === "email" ? (
                            <p><strong>Email:</strong> {formData.email}</p>
                        ) : (
                            <p><strong>Phone:</strong> {formData.phone}</p>
                        )}
                        <p><strong>Message:</strong> {formData.message}</p>
                        <p><strong>Rating:</strong> {formData.rating} Star{formData.rating !== 1 ? "s" : ""}</p>
                    </div>

                    <div className="mt-6 flex justify-end gap-2">
                        <button 
                            className="btn btn-outline" 
                            onClick={editForm}
                            disabled={isLoading}
                        >
                            Edit
                        </button>
                        <button 
                            className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                            onClick={confirmSubmission}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
