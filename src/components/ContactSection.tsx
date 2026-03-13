import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

export default function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meerzabq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 mt-2 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            Interested in working together or collaborating?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-teal-500`}
                required
              />
            </div>
            <div>
              <label
                className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-teal-500`}
                required
              />
            </div>
            <div>
              <label
                className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className={`w-full px-4 py-3 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-teal-500`}
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div>
              <h3
                className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:estherisrael036@gmail.com"
                  className={`flex items-center gap-3 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                >
                  <Mail className="w-5 h-5" />
                  estherisrael036@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/estheriokon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/thesmarrtEsther"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                >
                  <Twitter className="w-5 h-5" />
                  Twitter/X
                </a>
                <a
                  href="https://github.com/Smartbabbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
