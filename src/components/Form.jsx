import FormField from "./FormField";
import Button from "./ui/Button";

export default function Form() {
    return (
        <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
            <FormField
                type="email"
                id="email"
                name="email"
                placeholder="fill with your email"
            >
                email
            </FormField>

            <FormField
                type="password"
                id="password"
                name="password"

            >
                password
            </FormField>
            </div>

            <Button className="bg-blue-500 self-center">
                submit
            </Button>
        </form>
    )
}