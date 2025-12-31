export default function Label({ children, ...props }) {
    return (
        <label 
            className=""
            {...props}
        >
            {children}
        </label>
    )
}