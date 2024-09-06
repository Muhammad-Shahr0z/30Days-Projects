import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {/* Facebook */}
      <a href="https://www.facebook.com/muhammad.shahroz.58/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition duration-300">
        <FaFacebook className="w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/muhammad-shahroz-a35b68292/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition duration-300">
        <FaLinkedin className="w-6 h-6" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/Muhammad-Shahr0z" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
