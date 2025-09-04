import { useEffect, useState } from "react";
// import { Input } from "../../../components/ui/input";

export const Display = () => {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<string | null>('');

    useEffect(() => {
        setExpression("2 * 2 + 1 =");
        setResult("6");
    }, [])

    return (
        <div className="w-full min-h-[80px]">
            {/* <Input /> */}
            { result && (
                <div className="text-lg text mb-1 ml-3 text-left text-secondary-foreground">
                    { expression.replace("=", "").trim() }
                </div>
            )}

            <div className="text-4xl mb-1 text-right mr-3">
                {result || expression}
            </div>
        </div>
    );
}