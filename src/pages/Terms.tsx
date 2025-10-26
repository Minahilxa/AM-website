import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Terms & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Our commitment to transparency and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">1. Scope of Services</h2>
                  <p className="text-muted-foreground">
                    AM Enterprises provides full-spectrum 360° digital solutions, including:
                    Web development, branding, SEO, digital marketing, graphic design, CRM integration, 
                    and blockchain/web3 development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">2. Payment Terms – Three Milestones</h2>
                  <p className="text-muted-foreground mb-4">
                    To ensure smooth workflow and transparency, payments are divided into three stages:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">Milestone 1 – 40% (Project Initiation)</h3>
                        <p className="text-muted-foreground">Paid in advance to start the project and secure your booking.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">Milestone 2 – 40% (Mid-Project)</h3>
                        <p className="text-muted-foreground">Paid after completion of design or development stage and client review.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">Milestone 3 – 20% (Final Delivery)</h3>
                        <p className="text-muted-foreground">Paid after testing, approval, and before final deployment. (All payments are non-refundable after final delivery.)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">3. Revisions & Adjustments</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Up to three free revisions per design/development phase.</li>
                    <li>• Additional edits are charged based on time and complexity.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">4. Confidentiality</h2>
                  <p className="text-muted-foreground">
                    All client data, designs, and source materials remain strictly confidential 
                    and are never shared with third parties.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">5. Project Timelines</h2>
                  <p className="text-muted-foreground">
                    Delivery time varies based on project size and requirements. Each project 
                    includes a custom timeline agreement before initiation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">6. Ownership Rights</h2>
                  <p className="text-muted-foreground">
                    Full ownership and source files are transferred to the client after complete payment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">7. Support & Maintenance</h2>
                  <p className="text-muted-foreground">
                    Ongoing post-launch support, updates, and maintenance available under extended service plans.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">8. Communication & Reporting</h2>
                  <p className="text-muted-foreground">
                    All official discussions are conducted via email, WhatsApp Business, 
                    or agreed-upon communication channels with progress reports at each milestone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Terms;
