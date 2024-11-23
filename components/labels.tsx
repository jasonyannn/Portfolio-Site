import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode; // The content inside the label (e.g., text or icons)
  className?: string;        // Optional: Custom CSS classes for styling
}

export const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-300 ${className || ''}`}
      {...props} // Spread any additional props (e.g., htmlFor)
    >
      {children}
    </label>
  );
};
