import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              ProductifyGhana
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering non-technical founders and businesses to transform
              their software product ideas into reality through comprehensive
              design, development, and hosting services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/productify-ghana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@productrealize.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Who We Serve
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Product Discovery
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  MVP Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  DevOps & Hosting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Maintenance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} ProductifyGhana. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
