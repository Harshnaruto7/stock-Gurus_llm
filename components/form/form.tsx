"use client"
import React,{useState} from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    contactMethod: "email" | "phone"; // Specify the types for contactMethod
    message: string;
    rating: number; // Added rating to the form data
}


export default function Form(){

    const [formData, setFormData] = useState<FormData>({
        name: "",
        contactMethod: "email",
        email: "",
        phone: "",
        message: "",
        rating: 2, // Set default rating to 2
    });

    // const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);
    const totalSteps = 3; 
    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRatingChange = (value: number) => {
        setFormData((prevData) => ({ ...prevData, rating: value }));
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || (!formData.email && !formData.phone) || !formData.message) {
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setIsConfirmed(true);
        setErrorMessage("");
    };

    const confirmSubmission = () => {
        console.log("Confirmed Data:", formData);
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert("Thank you for your submission!");

        setFormData({
            name: "",
            contactMethod: "email",
            email: "",
            phone: "",
            message: "",
            rating: 2, // Reset rating to default (2)
        });
        setCurrentStep(1);
        setIsConfirmed(false);
    };

    const editForm = () => {
        setIsConfirmed(false);
        setCurrentStep(1);
    };

    const progressValue = isConfirmed ? 100 : (currentStep - 1) * (100 / totalSteps);


    return(
    <>
       <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                {/* Progress Bar */}
                <progress className="progress progress-info w-full mb-6" value={progressValue} max="100"></progress>

                {isConfirmed && (
                    <div role="alert" className="alert alert-success mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Your submission is ready for review!</span>
                    </div>
                )}

                {!isConfirmed ? (
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        
                        {currentStep === 1 && (
                            <div className="form-control mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="button" className="btn btn-primary mt-4" onClick={handleNextStep}>
                                    Next
                                </button>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="form-control mb-4">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Contact Method:</span>
                                </label>
                                <div className="flex gap-4 mb-4">
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="email"
                                            className="radio"
                                            checked={formData.contactMethod === "email"}
                                            onChange={handleChange}
                                        />
                                        Email
                                    </label>
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="phone"
                                            className="radio"
                                            checked={formData.contactMethod === "phone"}
                                            onChange={handleChange}
                                        />
                                        Phone
                                    </label>
                                </div>

                                {formData.contactMethod === "email" ? (
                                    <div className="form-control mb-4">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className="input input-bordered input-primary w-full max-w-xs"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                ) : (
                                    <div className="form-control mb-4">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone Number"
                                            className="input input-bordered input-primary w-full max-w-xs"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                )}

                                <button type="button" className="btn btn-primary mt-4" onClick={handleNextStep}>
                                    Next
                                </button>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="form-control mb-4">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="textarea textarea-bordered textarea-primary w-full max-w-xs"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className="btn btn-primary mt-4">
                                    Submit
                                </button>
                            </div>
                        )}
                    </form>
                ) : (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Please Confirm Your Submission</h2>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Contact Method:</strong> {formData.contactMethod}</p>
                        {formData.contactMethod === "email" ? (
                            <p><strong>Email:</strong> {formData.email}</p>
                        ) : (
                            <p><strong>Phone:</strong> {formData.phone}</p>
                        )}
                        <p><strong>Message:</strong> {formData.message}</p>
                        <p><strong>Rating:</strong> {formData.rating} Star{formData.rating !== 1 ? "s" : ""}</p>

                        <div className="mt-4">
                            <button className="btn btn-success" onClick={confirmSubmission}>
                                Confirm
                            </button>
                            <button className="btn btn-secondary ml-2" onClick={editForm}>
                                Edit
                            </button>
                        </div>
                    </div>
                )}

                {/* Rating Stars */}
                <div className="rating rating-lg mt-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <input
                            key={star}
                            type="radio"
                            name="rating"
                            className="mask mask-star-2 bg-orange-400" // Updated color to bg-orange-400
                            checked={formData.rating === star}
                            onChange={() => handleRatingChange(star)}
                        />
                    ))}
                </div>
            </div>
    

    </>
    );








}













