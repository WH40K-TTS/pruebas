export function Button({ children, variant = "gold" }) {
  const base = "px-6 py-2 uppercase tracking-wider transition";

  const styles = {
    gold: "border border-primary text-primary hover:bg-primary/10",
    red: "bg-accent text-white hover:bg-accentSoft",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}