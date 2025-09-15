import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <main className="hero-gradient min-h-[80vh] flex flex-col justify-center items-center px-4 py-16">
        <div className="container mx-auto text-center space-y-8 fade-in">
          {/* Welcome Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground arabic-title">
              جمعية العديلية التعاونية ترحب بكم
            </h1>
            
            <div className="flex justify-center">
              <img 
                src={logo} 
                alt="شعار جمعية العديلية التعاونية" 
                className="h-48 md:h-64 w-auto object-contain"
              />
            </div>
          </div>

          {/* App Description */}
          <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <p className="text-lg md:text-xl text-foreground arabic-body leading-relaxed">
              يمكنك تحميل تطبيق جمعية العديلية التعاونية الجديد الآن
              <br />
              <span className="text-primary font-semibold">تطبيق الهواتف الذكية</span>
            </p>
          </Card>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              className="app-button-google w-64 h-16 text-lg font-semibold rounded-xl shadow-lg"
              asChild
            >
              <a href="#" title="تحميل من جوجل بلاي">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📱</div>
                  <div className="text-right">
                    <div className="text-xs opacity-80">متوفر على</div>
                    <div>Google Play</div>
                  </div>
                </div>
              </a>
            </Button>

            <Button
              className="app-button-apple w-64 h-16 text-lg font-semibold rounded-xl shadow-lg"
              asChild
            >
              <a 
                href="https://apps.apple.com/app/id6502692558" 
                target="_blank"
                rel="noopener noreferrer"
                title="تحميل من أب ستور"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🍎</div>
                  <div className="text-right">
                    <div className="text-xs opacity-80">تحميل من</div>
                    <div>App Store</div>
                  </div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
