import { Navigate } from 'react-router-dom';
import memoryUtil from '../utils/memory.util';

// simple authentication components
// just for display
export default function Auth({ children }) {
  if (!memoryUtil.getUser()) {
    alert('please login first');
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
