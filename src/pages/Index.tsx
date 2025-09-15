import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cooperativeLogo from "@/assets/cooperative-logo.png";
import appleLogo from "@/assets/apple-logo.png";
import googlePlayLogo from "@/assets/google-play-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      <main className="hero-gradient min-h-[80vh] flex flex-col justify-center items-center px-4 py-16">
        <div className="container mx-auto text-center space-y-8 fade-in">
          {/* Welcome Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground arabic-title">
              جمعية صباح الناصر التعاونية ترحب بكم
            </h1>

            <div className="flex justify-center mb-6">
              <img
                src={cooperativeLogo}
                alt="شعار جمعية صباح الناصر التعاونية"
                className="h-48 md:h-64 w-auto object-contain"
              />
            </div>
          </div>

          {/* App Description */}
          <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <p className="text-lg md:text-xl text-foreground arabic-body leading-relaxed">
              يمكنك تحميل تطبيق جمعية صباح الناصر التعاونية الجديد الآن
              <br />
              <span className="text-primary font-semibold">
                تطبيق الهواتف الذكية
              </span>
            </p>
          </Card>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.jameiatsabah.ebaakw"
              target="_blank"
              rel="noopener noreferrer"
              title="تحميل من جوجل بلاي"
              className="w-64 h-16 rounded-xl shadow-lg bg-[#4285F4] hover:bg-[#357ae8] text-white flex items-center justify-center gap-3 transition-all"
            >
              <img
                src={googlePlayLogo}
                alt="Google Play"
                className="w-8 h-8"
              />
              <div className="text-left">
                <div className="text-xs opacity-80">متوفر على</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com/kw/app/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86%D9%8A%D9%87/id6447062914"
              target="_blank"
              rel="noopener noreferrer"
              title="تحميل من أب ستور"
              className="w-64 h-16 rounded-xl shadow-lg bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-3 transition-all"
            >
              <img src={appleLogo} alt="Apple" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs opacity-80">تحميل من</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
