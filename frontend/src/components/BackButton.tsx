import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

export default function BackButton({ to, label = 'Back', className = '' }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors group ${className}`}
    >
      <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
