import Container from './Container';

const Footer = () => {
  return (
  
        <footer className=" bg-black text-gray-300">
   <Container>
    
      <div className=" px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          
          <div className="md:col-span-1">
            <h2 className="text-white font-bold text-lg mb-3">CS — Ticket System</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              "Streamlining customer support with fast, reliable ticket management. We help teams resolve issues efficiently and keep customers satisfied every step of the way."
            </p>
          </div>

          <div>
            <h3 className=" font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

      
          <div>
            <h3 className=" font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-blue-400">𝕏</span> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-pink-400">◎</span> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-blue-600">f</span> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-red-400">✉</span> support@cst.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

   </Container>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>

 
  );
};

export default Footer;
