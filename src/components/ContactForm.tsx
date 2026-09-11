"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Architecture",
    location: "",
    estimatedBudget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-[1-9]\d{7,14}$/.test(formData.phone.replace(/[\s\-\+\(\)]/g, ""))) {
      newErrors.phone = "Please enter a valid contact number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.location.trim()) newErrors.location = "Project location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate submission / client-side action
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-12 rounded-sm bg-dark-card border border-gold/40 text-center space-y-4 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-white">Consultation Request Received</h3>
        <p className="text-sm text-gray-muted max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to <strong className="text-white">HARMYA KSHETHRA</strong>. Our principal architects will review your requirements and reach out within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              projectType: "Residential Architecture",
              location: "",
              estimatedBudget: "",
              message: "",
            });
          }}
          className="mt-4 px-6 py-2 text-xs uppercase tracking-widest text-gold hover:underline font-mono"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Anish Kurian"
            className={`w-full px-4 py-3 rounded-sm bg-dark-surface border text-sm text-white placeholder-gray-subtle focus:outline-none focus:border-gold transition-colors ${
              errors.name ? "border-red-500" : "border-dark-border"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
            Phone / WhatsApp <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 94000 00000"
            className={`w-full px-4 py-3 rounded-sm bg-dark-surface border text-sm text-white placeholder-gray-subtle focus:outline-none focus:border-gold transition-colors ${
              errors.phone ? "border-red-500" : "border-dark-border"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="anish@example.com"
            className={`w-full px-4 py-3 rounded-sm bg-dark-surface border text-sm text-white placeholder-gray-subtle focus:outline-none focus:border-gold transition-colors ${
              errors.email ? "border-red-500" : "border-dark-border"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="location" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
            Project Location <span className="text-gold">*</span>
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Ramapuram / Kottayam"
            className={`w-full px-4 py-3 rounded-sm bg-dark-surface border text-sm text-white placeholder-gray-subtle focus:outline-none focus:border-gold transition-colors ${
              errors.location ? "border-red-500" : "border-dark-border"
            }`}
          />
          {errors.location && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.location}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-sm bg-dark-surface border border-dark-border text-sm text-white focus:outline-none focus:border-gold transition-colors"
          >
            <option value="Residential Architecture">Residential Architecture</option>
            <option value="Commercial Development">Commercial Development</option>
            <option value="Turnkey Construction">Turnkey Construction</option>
            <option value="Interior Architecture">Interior Architecture</option>
            <option value="Renovation & Heritage Reuse">Renovation & Heritage Reuse</option>
          </select>
        </div>

        {/* Estimated Budget */}
        <div>
          <label htmlFor="estimatedBudget" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
            Estimated Budget Range
          </label>
          <select
            id="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
            className="w-full px-4 py-3 rounded-sm bg-dark-surface border border-dark-border text-sm text-white focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">Select Budget Range</option>
            <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
            <option value="₹1 Crore - ₹2.5 Crores">₹1 Crore - ₹2.5 Crores</option>
            <option value="₹2.5 Crores - ₹5 Crores">₹2.5 Crores - ₹5 Crores</option>
            <option value="₹5 Crores+">₹5 Crores+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
          Project Brief / Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your site, timeline, or design expectations..."
          className="w-full px-4 py-3 rounded-sm bg-dark-surface border border-dark-border text-sm text-white placeholder-gray-subtle focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      {/* Submit CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={loading}
          icon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {loading ? "Transmitting..." : "Book a Consultation"}
        </Button>
      </div>
    </form>
  );
};
