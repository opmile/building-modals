export default function Input({ ...props }) {
    return (
        <input 
            className="rounded-xl placeholder-gray-300 text-sm font-light border-solid px-4 py-2 outline-2 outline-gray-300"
            {...props} 
        />
    )
}