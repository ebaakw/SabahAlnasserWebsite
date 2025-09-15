import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary arabic-title">
            جمعية العديلية التعاونية
          </Link>
          
          <div className="flex gap-4">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              asChild
              className="arabic-body"
            >
              <Link to="/">الرئيسية</Link>
            </Button>
            <Button
              variant={isActive("/about") ? "default" : "ghost"}
              asChild
              className="arabic-body"
            >
              <Link to="/about">نبذة عنا</Link>
            </Button>
            <Button
              variant={isActive("/contact") ? "default" : "ghost"}
              asChild
              className="arabic-body"
            >
              <Link to="/contact">تواصل معنا</Link>
            </Button>
            <Button
              variant={isActive("/privacy") ? "default" : "ghost"}
              asChild
              className="arabic-body"
            >
              <Link to="/privacy">سياسة الخصوصية</Link>
            </Button>
            <Button
              variant={isActive("/terms") ? "default" : "ghost"}
              asChild
              className="arabic-body"
            >
              <Link to="/terms">الشروط والأحكام</Link>
            </Button>
          </div>
        </div>
      </nav>
    </Card>
  );
};

export default Navbar;