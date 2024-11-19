import React, { useState } from 'react';
import { Send, Check, Paintbrush, Mail, Palette } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        references: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formPayload = new FormData();
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('description', formData.description);
            formPayload.append('references', formData.references);

            // Send the data to FormSubmit API
            // replace '1e491e9f6372c6ff600eb8753c81bb71' with Hannah's email, then once you submit an email with this form, it will send an email to hannah to activate the form and it will give you a new string to replace hannah's email with in the next line
            const response = await fetch('https://formsubmit.co/ajax/2477dd2e3af3aaaa2851b0a6409a7d58', {
                method: 'POST',
                body: formPayload,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    description: '',
                    references: ''
                });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-secondary">Get in Touch</h2>
                    <p className="text-lg font-primary">
                        Let's bring your vision to life through art
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium font-secondary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium font-secondary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium font-secondary mb-2">
                                Project Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                                className="w-full p-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                                placeholder="Please describe your project idea, including any specific details or requirements..."
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium font-secondary mb-2">
                                Reference Images/Links
                            </label>
                            <textarea
                                value={formData.references}
                                onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                                rows={2}
                                className="w-full p-3 border border-stone-200 rounded-md focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                                placeholder="Share any reference images or inspiration links..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className={`w-full flex items-center justify-center p-4 rounded-md text-white font-medium transition-all duration-300 ${isSubmitting ? 'bg-stone-400' : 'bg-stone-800 hover:bg-stone-700'
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center">
                                    <Palette className="animate-spin mr-2 h-5 w-5" />
                                    Sending...
                                </div>
                            ) : isSuccess ? (
                                <div className="flex items-center">
                                    <Check className="mr-2 h-5 w-5" />
                                    Sent!
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Message
                                </div>
                            )}
                        </button>
                        {isSuccess && (
                            <div className="alert alert-success mb-6 flex justify-center">
                                <Check className="h-4 w-4 text-green-600 mt-1 mr-1" />
                                <p className="text-green-600">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>
                        )}
                    </form>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Mail className="h-6 w-6 font-secondary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Direct Email</h3>
                        <p className="text-primary">
                            Prefer to email directly?
                        </p>
                        <p className="text-primary flex items-center">
                            Reach out at:
                            <a href="mailto:hanna@gmail.com" target="_blank" rel="noopener noreferrer" className="font-secondary hover:underline ml-2">
                                hannah@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Paintbrush className="h-6 w-6 font-secondary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Commission Process</h3>
                        <p className="text-primary">
                            After submitting your request, I'll respond within 2-3 business days with a detailed quote and timeline.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;