interface AppLogoProps {
    className?: string;
}

export default function AppLogo({ className }: AppLogoProps) {
    return (
        <>
            <div className="flex items-center w-20 h-auto rounded-full ">
                <img src="/logoascee.png" className={className} alt="ASCEE Logo"/>
            </div>
        </>
    );
}
