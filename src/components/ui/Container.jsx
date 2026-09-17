export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-container container-px ${className}`}>
      {children}
    </div>
  );
}
