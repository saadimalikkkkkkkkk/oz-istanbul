function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 20L20 4" />
      <path d="M10 4H20V14" />
    </svg>
  );
}

export default ArrowIcon;