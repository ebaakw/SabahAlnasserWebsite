import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled after Supabase integration
    alert("لتفعيل إرسال الرسائل، يجب ربط المشروع بـ Supabase");
  };

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

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl arabic-title text-primary">
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="arabic-body">
                      الاسم الكامل
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="arabic-body">
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="arabic-body">
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="أدخل رقم هاتفك"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="arabic-body">
                      الموضوع
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="أدخل موضوع رسالتك"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="arabic-body">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="أدخل رسالتك هنا..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full arabic-body">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl arabic-title text-primary">
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold arabic-body">البريد الإلكتروني</p>
                      <p className="text-muted-foreground">info@adailiya-coop.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold arabic-body">رقم الهاتف</p>
                      <p className="text-muted-foreground">+965 XXXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold arabic-body">العنوان</p>
                      <p className="text-muted-foreground">منطقة العديلية - قطعة 4<br />دولة الكويت</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl arabic-title text-primary">
                    ساعات العمل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 arabic-body">
                    <div className="flex justify-between">
                      <span>السوق المركزي:</span>
                      <span>24 ساعة يومياً</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الأفرع:</span>
                      <span>من 6 صباحاً - 12 منتصف الليل</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الإدارة:</span>
                      <span>من 8 صباحاً - 4 عصراً</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;