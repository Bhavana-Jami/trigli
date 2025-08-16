const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Trigli. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;