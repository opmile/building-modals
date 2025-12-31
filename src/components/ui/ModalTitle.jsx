export default function ModalTitle({ children, className = "" }) {
    return(
        <h2 className={`text-3xl font-bold ${className}`}>
           {children} 
        </h2>
    )
}