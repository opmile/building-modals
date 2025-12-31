export default function Button({ children, className = "", ...props }) {
    const baseClasses = "px-4 py-2 rounded-xl font-bold shadow-lg text-white"

    return (
        <button 
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}