"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { theme } = useTheme()

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

  const getIconBgGradient = () => {
    if (theme === "purple") return "from-[#1a1a24] to-[#252532]"
    if (theme === "light") return "from-gray-100 to-white border border-gray-200"
    return "from-[#1a1a24] to-[#252532]"
  }

  const getIconColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-500"
    return "text-emerald-400"
  }

  const getInputBgGradient = () => {
    if (theme === "purple")
      return "from-[#1a1a24] to-[#252532] border-gray-700 focus:border-purple-400 focus:ring-purple-400"
    if (theme === "light") return "from-white to-gray-50 border-gray-300 focus:border-blue-400 focus:ring-blue-400"
    return "from-[#1a1a24] to-[#252532] border-gray-700 focus:border-emerald-400 focus:ring-emerald-400"
  }

  const getButtonGradient = () => {
    if (theme === "purple") return "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    if (theme === "light") return "from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
    return "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
  }

  const getHeadingColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-400"
  }

  const getLinkColor = () => {
    if (theme === "purple") return "text-gray-400 hover:text-purple-400"
    if (theme === "light") return "text-gray-600 hover:text-blue-500"
    return "text-gray-400 hover:text-emerald-400"
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-sm uppercase tracking-wider ${getHeadingColor()} mb-2`}>GET IN TOUCH</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h3>
          <p className="text-foreground/80">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h4 className="text-2xl font-bold mb-6">Let's Talk</h4>

            <div className="space-y-6">
              <div className="flex items-start">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${getIconBgGradient()} flex items-center justify-center mr-4`}
                >
                  <Mail className={getIconColor()} size={20} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">Email</h5>
                  <a href="mailto:golammahmud1314@gmail.com" className={getLinkColor()}>
                    golammahmud1314@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${getIconBgGradient()} flex items-center justify-center mr-4`}
                >
                  <Phone className={getIconColor()} size={20} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">Phone</h5>
                  <a href="tel:+8801743871007" className={getLinkColor()}>
                    +880 1743 871007
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${getIconBgGradient()} flex items-center justify-center mr-4`}
                >
                  <MapPin className={getIconColor()} size={20} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">Location</h5>
                  <p className="text-foreground/60">Mirpur-2, Dhaka</p>
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
                  className={`w-full px-4 py-3 rounded-lg bg-gradient-to-br ${getInputBgGradient()} focus:outline-none focus:ring-1 transition-colors`}
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
                  className={`w-full px-4 py-3 rounded-lg bg-gradient-to-br ${getInputBgGradient()} focus:outline-none focus:ring-1 transition-colors`}
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
                  className={`w-full px-4 py-3 rounded-lg bg-gradient-to-br ${getInputBgGradient()} focus:outline-none focus:ring-1 transition-colors`}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-gradient-to-r ${getButtonGradient()} text-white font-medium transition-colors`}
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
