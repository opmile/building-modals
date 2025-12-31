import Input from "./ui/Input";
import Label from "./ui/Label";

export default function FormField({ children, id, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id}>
                {children}
            </Label>
            <Input {...props} id={id}/>
        </div>
    )
}