import { Button } from "../components/button";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { SEO } from "../components/seo";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        canonical="https://www.aurmak.com/404"
        noIndex
      />
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 text-9xl font-bold text-[#27aae1]">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#282973] dark:text-slate-100">
            Page Not Found
          </h1>
          <p className="text-[#5f6b8e] dark:text-slate-400 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/">
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Button>
            <Button onClick={() => navigate(-1)} variant="secondary">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
