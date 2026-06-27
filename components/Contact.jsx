"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";

// Section 4 — WHITE background
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.message.trim()) errs.message = "Message can't be empty.";
    else if (form.message.trim().length < 10) errs.message = "At least 10 characters please.";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate a small loading delay for realism
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-gray-900 dark:text-white dark:bg-[#13131f] placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm";
  const inputNormal = "border-gray-200 dark:border-gray-700 bg-white";
  const inputError = "border-red-400 bg-red-50 dark:bg-red-900/10";

  return (
    <section id="contact" className="py-28 bg-white dark:bg-[#0d0d1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — info */}
          <div>
            <span className="text-primary dark:text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
              Contact Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-5 tracking-tight">
              Have a Project<br />in Mind?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-md">
              Whether you're starting from scratch or leveling up something existing — drop us a message. We reply within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@pixorastudio.com" },
                { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary dark:text-indigo-300" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-gray-50 dark:bg-[#13131f] rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-green-500" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Thank you!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">We'll contact you soon. Stay tuned!</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary dark:text-indigo-400 text-sm font-medium hover:underline"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange} placeholder="John Doe"
                    className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange} placeholder="john@example.com"
                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange} placeholder="Tell us about your project..."
                    className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-indigo-700 disabled:opacity-70 text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2.5} />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
