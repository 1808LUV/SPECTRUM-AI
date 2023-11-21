import Image from "next/image"

export const Loader = () => {
    return (
        <div className="flex flex-col h-full gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                fill
                alt="logo"
                src="/logo.png"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                SPECTRUM is thinking...
            </p>
        </div>
    )
}