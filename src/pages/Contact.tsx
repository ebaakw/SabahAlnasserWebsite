import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4 arabic-title">
              تواصل معنا
            </h1>
            <p className="text-xl text-muted-foreground arabic-body">
              نحن هنا لخدمتكم والإجابة على استفساراتكم
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl arabic-title text-primary text-center">
                  معلومات التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold arabic-body text-lg">
                      البريد الإلكتروني
                    </p>
                    <p className="text-muted-foreground">
                      info@sabahalnaser.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold arabic-body text-lg">
                      رقم الهاتف
                    </p>
                    <p>
                      الهاتف:{" "}
                      <span
                        className="inline-block"
                        style={{ direction: "ltr", unicodeBidi: "embed" }}
                      >
                        +965 6040 1200
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold arabic-body text-lg">العنوان</p>
                    <p className="text-muted-foreground">
                      محافظة الفروانية - منطقة صباح الناصر - <br />
                      دولة الكويت
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl arabic-title text-primary text-center">
                  ساعات العمل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 arabic-body text-lg">
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="font-semibold">السوق المركزي:</span>
                    <span>24 ساعة يومياً</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="font-semibold">الأفرع:</span>
                    <span>من 6 صباحاً - 12 منتصف الليل</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="font-semibold">الإدارة:</span>
                    <span>من 8 صباحاً - 3 عصراً</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
