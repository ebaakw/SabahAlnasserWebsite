const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-muted-foreground arabic-body">
          <p>جميع الحقوق محفوظة © 2025 جمعية صباح الناصر التعاونية</p>
          <p className="mt-2 text-sm">
            تم التطوير بواسطة{" "}
            <a
              href="http://ebaakw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Ebaa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
