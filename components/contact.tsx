"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-emerald-400 mb-2">GET IN TOUCH</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h3>
          <p className="text-gray-300">Feel free to reach out if you have any questions or want to work together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h4 className="text-2xl font-bold mb-6">Let's Talk</h4>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a24] to-[#252532] flex items-center justify-center mr-4">
                  <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">Email</h5>
                  <a
                    href="mailto:golammahmud1314@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    golammahmud1314@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a24] to-[#252532] flex items-center justify-center mr-4">
                  <Phone className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">Phone</h5>
                  <a href="tel:+8801743871007" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    +880 1743 871007
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a24] to-[#252532] flex items-center justify-center mr-4">
                  <MapPin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">Location</h5>
                  <p className="text-gray-400">Mirpur-2, Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-[#1a1a24] to-[#252532] border border-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-[#1a1a24] to-[#252532] border border-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-[#1a1a24] to-[#252532] border border-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
